const schemaVersion = 1;

const db = new Dexie("watchlist");
db.version(schemaVersion).stores({
    shows: "++id,&title,&titleLn,nextRelease,availableOn,liked,remarks,archived"
});