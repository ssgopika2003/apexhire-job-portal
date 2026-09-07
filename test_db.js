const db = require('./database');

async function test() {
    db.switchToMockFallback();
    console.log("isMocked:", db.isMocked);
    const jobs = await db.Job.find({}).populate('employerId');
    console.log("Jobs from db.Job.find (mock):");
    console.log(JSON.stringify(jobs, null, 2));
}

test().catch(console.error);
