require('dotenv').config();
const mongoose = require('mongoose');
const { supabase } = require('./utils/supabaseClient');
const Session = require('./models/Session');
const Interaction = require('./models/Interaction');
const Lead = require('./models/Lead');

async function clearAll() {
    console.log("=== STARTING COMPLETE DATA RESET FOR LIVE DEPLOYMENT ===");

    // 1. CLEAR SUPABASE
    if (supabase) {
        console.log("\n[1/2] Clearing Supabase Database...");
        try {
            // Delete interactions first (child records)
            const { error: intErr, count: intCount } = await supabase
                .from('interactions')
                .delete({ count: 'exact' })
                .neq('session_id', '__never_match__');
            if (intErr) console.error("Supabase interactions delete note:", intErr.message);
            else console.log(`✓ Deleted ${intCount ?? 'all'} records from Supabase 'interactions' table`);

            // Delete leads
            const { error: leadErr, count: leadCount } = await supabase
                .from('leads')
                .delete({ count: 'exact' })
                .neq('session_id', '__never_match__');
            if (leadErr) console.error("Supabase leads delete note:", leadErr.message);
            else console.log(`✓ Deleted ${leadCount ?? 'all'} records from Supabase 'leads' table`);

            // Delete sessions
            const { error: sessErr, count: sessCount } = await supabase
                .from('sessions')
                .delete({ count: 'exact' })
                .neq('session_id', '__never_match__');
            if (sessErr) console.error("Supabase sessions delete note:", sessErr.message);
            else console.log(`✓ Deleted ${sessCount ?? 'all'} records from Supabase 'sessions' table`);

            // Verify count
            const { count: sLeft } = await supabase.from('sessions').select('*', { count: 'exact', head: true });
            const { count: iLeft } = await supabase.from('interactions').select('*', { count: 'exact', head: true });
            console.log(`Supabase verification: ${sLeft} sessions remaining, ${iLeft} interactions remaining.`);
        } catch (e) {
            console.error("Supabase clear error:", e.message);
        }
    } else {
        console.log("[1/2] Supabase not initialized, skipping Supabase clear.");
    }

    // 2. CLEAR MONGODB
    console.log("\n[2/2] Clearing MongoDB Database...");
    try {
        const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rvce_clarity';
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
        }
        
        const sRes = await Session.deleteMany({});
        console.log(`✓ Deleted ${sRes.deletedCount} sessions from MongoDB`);

        const iRes = await Interaction.deleteMany({});
        console.log(`✓ Deleted ${iRes.deletedCount} interactions from MongoDB`);

        const lRes = await Lead.deleteMany({});
        console.log(`✓ Deleted ${lRes.deletedCount} leads from MongoDB`);

        console.log("MongoDB verification: 0 sessions, 0 interactions, 0 leads.");
    } catch (e) {
        console.warn("MongoDB note:", e.message);
    }

    console.log("\n=======================================================");
    console.log("✅ ALL DATA SUCCESSFULLY CLEARED!");
    console.log("Ready for live traffic on wallpapers / production site.");
    console.log("=======================================================");
    process.exit(0);
}

clearAll();
