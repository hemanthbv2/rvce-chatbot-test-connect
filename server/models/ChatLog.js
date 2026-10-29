const mongoose = require('mongoose');

// Schema matches the existing localStorage log format exactly
// so all dashboard logic works without changes to data processing
const chatLogSchema = new mongoose.Schema({
    s: { type: String, index: true },         // Session ID (e.g., "sid_abc123")
    q: { type: String, default: '' },          // User query or action description
    i: { type: String, default: '', index: true }, // Intent ID (e.g., "placements", "click:Button")
    d: { type: String, default: '' },          // ISO timestamp from client
    t: { type: String, default: 'message', index: true }, // Event type: 'message' | 'interaction'
    m: { type: mongoose.Schema.Types.Mixed, default: {} }, // Metadata object
    resolved: { type: Boolean, default: false }, // For unanswered question tracking
    
    // New fields for cross-device tracking
    device: { type: String, default: '' },     // User-Agent string
    deviceType: { type: String, default: 'unknown' }, // 'desktop' | 'mobile' | 'tablet'
    browserName: { type: String, default: '' }, // e.g., 'Chrome', 'Firefox'
    os: { type: String, default: 'unknown' },  // e.g., 'Windows', 'iOS'
    city: { type: String, default: 'Unknown' }, // from IP geolocation
    country: { type: String, default: 'Unknown' }, // from IP geolocation
    
    // Server timestamp for reliable ordering
    createdAt: { type: Date, default: Date.now, index: true }
}, {
    timestamps: false, // We manage our own timestamps
    versionKey: false  // Don't add __v field
});

// Compound index for efficient session-based queries
chatLogSchema.index({ s: 1, d: 1 });
// Index for date-range filtering on dashboard
chatLogSchema.index({ createdAt: -1 });

module.exports = mongoose.model('ChatLog', chatLogSchema);
