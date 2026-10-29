const parks = [
// ================================================================================================================
// INDIANA
// ================================================================================================================

// ---------------------------- PUBLIC / COMMUNITY -----------------------------

    {
        name: "Crump's Canine Corral",
        parkType: "Public Dog Park",
        lat: 41.3658,
        lng: -85.2386,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: null,
        water: "Unknown",
        wasteBags: "Unknown",
        parking: "Unknown",
        hours: "7:00 AM - 8:00 PM",
        info: "FREE • Off-leash dog park",
        location: "Avilla, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source",
        source: "Visit Noble County / Visit Indiana",
        sourceUrl: "https://www.visitnoblecounty.org/post/fun-for-the-fur-babies"
    },

    {
        name: "Churubusco Dog Park",
        parkType: "Public Dog Park",
        lat: 41.2319,
        lng: -85.3186,
        status: "unknown",
        statusLabel: "🟡 NEEDS VERIFICATION",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: null,
        water: "Unknown",
        wasteBags: "Waste receptacles available",
        parking: "Parking available at Churubusco Community Park",
        hours: "7:00 AM - 11:00 PM",
        info: "Public leash-free dog park • Maximum 2 dogs per handler • Tennis balls only",
        location: "605 John Krieger Dr, Churubusco, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source",
        source: "Town of Churubusco",
        sourceUrl: "https://townofchurubusco.com/2021/10/08/notice-public-hearing-ordinance-2021-15-ordinance-establishing-rules-leash-free-dog-parks-within-town-churubusco/"
    },

    {
        name: "Rudy's Dog Park",
        parkType: "Membership Dog Park",
        lat: 41.2794,
        lng: -85.8236,
        status: "fee",
        statusLabel: "🔴 FEE REQUIRED",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: true,
        rv: null,
        water: "Unknown",
        wasteBags: "Unknown",
        parking: "Parking area available",
        hours: "Dawn to dusk",
        info: "Membership required • Key-fob access • Separate small-dog and all-size areas",
        location: "E County Road 300 N & N County Road 100 E, Warsaw, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source",
        source: "Rudy's Dog Park",
        sourceUrl: "https://www.rudysdogpark.org/about.html"
    },

    {
        name: "Pawster Park Pooch Playground",
        parkType: "Membership Dog Park",
        lat: 41.03874,
        lng: -85.16335,
        status: "fee",
        statusLabel: "🔴 FEE REQUIRED",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: false,
        rv: null,
        water: "Unknown",
        wasteBags: "Not provided",
        parking: "Unknown",
        hours: "6:00 AM - 10:00 PM daily",
        info: "Pooch Pass required • Off-leash • Fenced",
        location: "Fort Wayne, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source",
        source: "Fort Wayne Parks & Recreation",
        sourceUrl: "https://www.cityoffortwayne.in.gov/DocumentCenter/View/2129"
    },

    {
        name: "Camp Canine",
        parkType: "Membership Dog Park",
        lat: 41.11290,
        lng: -85.11760,
        status: "fee",
        statusLabel: "🔴 FEE REQUIRED",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: true,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Dog/human drinking fountains",
        wasteBags: "Bring your own; waste container available",
        parking: "Parking available",
        hours: "6:00 AM - 10:00 PM daily",
        seasonalClosure: "Johnny Appleseed Festival - 3rd full weekend in September",
        accessNote: "Free for campground guests; Pooch Pass required otherwise",
        info: "Off-leash • Fenced • Separate areas • Drinking fountains",
        location: "Fort Wayne, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Fort Wayne Parks & Recreation",
        sourceUrl: "https://www.cityoffortwayne.in.gov/Facilities/Facility/Details/Camp-Canine-24"
    },

    {
        name: "Thomas Park Dog Park",
        parkType: "Public Dog Park",
        lat: 41.37156,
        lng: -85.05313,
        status: "unknown",
        statusLabel: "🟡 NEEDS VERIFICATION",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: true,
        rv: null,
        water: "Unknown",
        wasteBags: "unknown",
        parking: "Grass/gravel parking",
        hours: "9:00 AM -9:00 PM daily",
        info: "Off-leash • Fenced • Separate small & large dog areas",
        location: "Auburn, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source",
        source: "City of Auburn Parks & Recreation",
        sourceUrl: "https://www.ci.auburn.in.us/Facilities/Facility/Details/Thomas-Park-5"
    },

// --------------------------------- INDIANA TRAVEL STOPS -----------------------------------

    {
        name: "Love's Travel Stop #633 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 41.362295,
        lng: -86.349031,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "Truck and RV-accessible travel stop parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "2952 Gary Drive, Plymouth, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/plymouth/loves-travel-stop-plymouth-633"
    },
    
    {
        name: "Love's Travel Stop #551 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 41.633909,
        lng: -85.050472,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "3443 W Maumee St, Angola, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/angola/loves-travel-stop-angola-551"
    },
    {
        name: "Love's Travel Stop #592 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 41.140932,
        lng: -84.849987,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "5959 N State Road 101, Woodburn, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/woodburn/loves-travel-stop-woodburn-592"
    },
    {
        name: "Love's Travel Stop #323 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 40.554335,
        lng: -85.548979,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "Truck parking available",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "253 Tippy Ditch Rd, Marion, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/marion/loves-travel-stop-marion-323"
    },
    {
        name: "Love's Travel Stop #710 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 40.276444,
        lng: -86.130021,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "1875 Campbell Crossing, Tipton, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/tipton/loves-travel-stop-tipton-710"
    },
    {
        name: "Love's Travel Stop #459 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 39.979487,
        lng: -86.395912,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "4155 S Indianapolis Rd, Whitestown, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/whitestown/loves-travel-stop-whitestown-459"
    },
    {
        name: "Love's Travel Stop #451 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 39.551539,
        lng: -86.044627,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
         parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "Truck parking available",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "5115 N 300 E, Whiteland, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/whiteland/loves-travel-stop-whiteland-451"
    },
    {
        name: "Love's Travel Stop #601 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 39.8436,
        lng: -85.5575,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly parking • 5 back-in RV spaces • Truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "6190 South State Route 109, Knightstown, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/knightstown/loves-travel-stop-knightstown-601"
    },
    {
        name: "Love's Travel Stop #222 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 39.870945,
        lng: -84.933264,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "2698 US Hwy 35 N, Richmond, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/richmond/loves-travel-stop-richmond-222"
    },
    {
        name: "Love's Travel Stop #319 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 39.877254,
        lng: -86.473992,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "780 Jeff Gordon Blvd, Pittsboro, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/pittsboro/loves-travel-stop-pittsboro-319"
    },
    {
        name: "Love's Travel Stop #874 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 40.452717,
        lng: -86.850201,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "2400 E 200 N, Lafayette, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/lafayette/loves-travel-stop-lafayette-874"
    },
    {
        name: "Love's Travel Stop #394 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 41.143469,
        lng: -87.261020,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "29 pull-through RV spaces • 36 back-in RV spaces • Truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "11207 W State Road 10, DeMotte, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/demotte/loves-travel-stop-demotte-394"
    },
    {
        name: "Love's Travel Stop #417 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 41.561770,
        lng: -87.356616,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "3150 Grant St, Gary, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/gary/loves-travel-stop-gary-417"
    },
    {
        name: "Love's Travel Stop #664 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 39.347895,
        lng: -87.389742,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "Truck parking available",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "1730 E Harlan Drive, Terre Haute, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/terre-haute/loves-travel-stop-terre-haute-664"
    },
    {
        name: "Love's Travel Stop #355 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 38.490873,
        lng: -85.769880,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "13615 Blue Lick Rd, Memphis, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/memphis/loves-travel-stop-memphis-355"
    },
    
    {
        name: "Love's Travel Stop #729 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 41.665568,
        lng: -85.889048,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "Truck-accessible travel stop parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "2201 CR 17, Goshen, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/goshen/loves-travel-stop-goshen-729"
    },

    {
        name: "Love's Travel Stop #876 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 41.652263,
        lng: -86.895664,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "10157 N Love's Ave, Michigan City, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/michigan-city/loves-travel-stop-michigan-city-876"
    },

    {
        name: "Love's Travel Stop #414 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 38.1734,
        lng: -87.5516,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "Truck-accessible travel stop parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "901 East 1250 South, Haubstadt, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/haubstadt/loves-travel-stop-haubstadt-414"
    },

    {
        name: "Love's Travel Stop #839 Dog Park",
        parkType: "Travel Stop Dog Park",
        lat: 38.244469,
        lng: -86.357966,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: null,
        rv: true,
        parkingVanClassB: "Verified",
        parkingClassC: "Verified",
        parkingClassA: "Verified",
        parkingPullBehind: "Verified",
        parkingSemi: "Verified",
        water: "Unknown",
        wasteBags: "Waste bags and receptacles available",
        parking: "RV-friendly and truck parking",
        hours: "24 hours",
        info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
        location: "6582 S State Road 66, Leavenworth, Indiana",
        lastVerified: "September 2026",
        verificationMethod: "Official source + field verified",
        source: "Love's Travel Stops",
        sourceUrl: "https://www.loves.com/locations/in/leavenworth/loves-travel-stop-leavenworth-839"
    },

{
    name: "Love's Travel Stop #254 Dog Park",
    parkType: "Travel Stop Dog Park",

    lat: 39.615839,
    lng: -86.478508,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Unknown",
    wasteBags: "Waste bags and receptacles available",
    parking: "Truck-accessible travel stop parking",
    hours: "24 hours",

    info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
    location: "2299 Koger St, Mooresville, Indiana",

    lastVerified: "September 2026",
    verificationMethod: "Official source + field verified",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/in/mooresville/loves-travel-stop-mooresville-254"
},

{
    name: "Love's Travel Stop #600 Dog Park",
    parkType: "Travel Stop Dog Park",

    lat: 39.992515,
    lng: -85.844343,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Unknown",
    wasteBags: "Waste bags and receptacles available",
    parking: "Truck-accessible travel stop parking",
    hours: "24 hours",

    info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
    location: "9000 Interpark Dr, Pendleton, Indiana",

    lastVerified: "September 2026",
    verificationMethod: "Official source + field verified",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/600"
},

// ================================================================================================================
// MICHIGAN
// ================================================================================================================

// ---------------------------- PUBLIC / COMMUNITY -----------------------------

     {
        name: "Buth Field Dog Park",
        parkType: "Public Dog Park",
        lat: 43.1608,
        lng: -85.7076,
        status: "free",
        statusLabel: "🟢 CONFIRMED FREE",
        offleash: true,
        fenced: true,
        lighted: null,
        separated: true,
        rv: true,
            parkingVanClassB: "Verified",
            parkingClassC: "Likely suitable",
            parkingClassA: "Unknown",
            parkingPullBehind: "May be difficult",
        water: "Seasonal dog drinking fountain",
        wasteBags: "Waste station available",
        parking: "Free parking behind 476 E Division",
        info: "Off-leash • Fully fenced • Separate small & large dog areas • Waste station • Seasonal water",
        location: "Sparta, Michigan",
        lastVerified: "September 2026",
        verificationMethod: "Official source",
        source: "Village of Sparta",
        sourceUrl: "https://spartami.org/parks-playgrounds.php"
    },
    
    {
    name: "Algonac Dog Park",
    parkType: "Public Dog Park",

    lat: 42.6219,
    lng: -82.5327,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: null,
    fenced: null,
    lighted: null,
    separated: null,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Parking available at Lions Field",
    hours: "Unknown",

    seasonalClosure: null,
    accessNote: "Dog park located within Lions Field",

    info: "Public dog park at Lions Field",

    location: "Lions Field, Michigan Street near Dixie Boulevard, Algonac, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "City of Algonac",
    sourceUrl: "https://www.cityofalgonac.org/Parks"
},

{
    name: "East China Dog Park",
    parkType: "Public Dog Park",

    lat: 42.7697,
    lng: -82.4938,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Seasonal water fountain and bottle filling station",
    wasteBags: "Waste bags reported",
    parking: "Free parking reported",
    hours: "Unknown",

    seasonalClosure: null,
    accessNote: "Water is turned off during winter months",

    info: "Off-leash • Fully fenced • Seasonal water • Seating",

    location: "5111 Recor Rd, East China, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official-location evidence + secondary amenity verification",
    source: "St. Clair County / BringFido",
    sourceUrl: "https://www.bringfido.com/attraction/29205"
},

{
    name: "South Westnedge Dog Park",
    parkType: "Public Dog Park",

    lat: 42.1938,
    lng: -85.6329,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Water available",
    wasteBags: "Waste stations available",
    parking: "Parking available at South Westnedge Park",

    hours: "Seasonal hours; 7:00 AM opening",

    seasonalClosure: null,
    accessNote: "Free to anyone age 16 or older; dogs must be at least 4 months old",

    info: "FREE • Off-leash • Two fenced areas • Small-dog area under 25 lb • Water • Waste stations",

    location: "9010 South Westnedge Avenue, Portage, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "City of Portage",
    sourceUrl: "https://www.portagemi.gov/Facilities/Facility/Details/-26"
},

    {
    name: "Heritage Park Dog Park",
    parkType: "Public Dog Park",

    lat: 41.9507,
    lng: -84.9868,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Unknown",
    wasteBags: "Mutt Mitt dispensers and waste containers available",
    parking: "Parking available",

    hours: "Unknown",

    seasonalClosure: null,
    accessNote: null,

    info: "Off-leash dog park • Separate small & large dog areas • Waste bag dispensers",

    location: "1776 Heritage Park Drive, Coldwater, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "City of Coldwater",
    sourceUrl: "https://www.coldwater.org/Facilities/Facility/Details/Heritage-Park-1"
},

{
    name: "Lawrence McKinley / Vet's Park Dog Park",
    parkType: "Public Dog Park",

    lat: 43.4197,
    lng: -83.9206,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: null,
    fenced: null,
    lighted: true,
    separated: null,

    rv: null,
    parkingVanClassB: "Unknown",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Unknown",

    hours: "Sunrise to sunset",

    seasonalClosure: null,
    accessNote: null,

    info: "City dog park • Lighted facility",

    location: "930 S 20th Street, Saginaw, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "City of Saginaw",
    sourceUrl: "https://www.saginaw-mi.com/DocumentCenter/View/475/City-of-Saginaw-Parks-and-Recreation-Plan-PDF?bidId="
},
    
{
    name: "Bay County Dog Park",
    parkType: "Public Dog Park",

    lat: 43.5755,
    lng: -83.8738,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Accessible drinking fountain for people and dogs",
    wasteBags: "Unknown",
    parking: "Bay County Fairgrounds parking",

    hours: "Unknown",

    seasonalClosure: null,
    accessNote: "Public off-leash dog park",

    info: "Off-leash • Fenced • Separate small-dog area • Agility equipment • Drinking fountain",

    location: "800 Livingston Street, Bay City, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "Bay County",
    sourceUrl: "https://www.baycountymi.gov/Recreation/"
},

{
    name: "Cass City Bark Park",
    parkType: "Public Dog Park",

    lat: 43.5987,
    lng: -83.1665,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Dog bowl fountain outside dog park",
    wasteBags: "Waste receptacles available",
    parking: "Municipal Park parking",

    hours: "Unknown",

    seasonalClosure: null,
    accessNote: null,

    info: "Fenced dog park • Separate large & small dog areas • Agility equipment • Water station",

    location: "Scott McCullough Drive, Cass City, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "Village of Cass City",
    sourceUrl: "https://www.casscity.org/index.php/?id=4&option=com_sppagebuilder&view=page"
},

{
    name: "Caseville Township Dog Park",
    parkType: "Public Dog Park",

    lat: 43.9417,
    lng: -83.2738,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: null,
    parkingVanClassB: "Unknown",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Water fountain reported",
    wasteBags: "Waste bags reported",
    parking: "Unknown",

    hours: "Unknown",

    seasonalClosure: "TEMPORARILY CLOSED — construction",
    accessNote: "Caseville Township currently reports the Dog Park closed due to construction. Check official source before visiting.",

   info: "⚠️ TEMPORARILY CLOSED • Construction • Fenced off-leash dog park • Water and waste bags reported",

    location: "N Caseville Road, Caseville, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source + secondary amenity verification",
    source: "Caseville Township / BringFido",
    sourceUrl: "https://www.bringfido.com/attraction/37194"
},

{
    name: "Chippewa Landing Dog Park",
    parkType: "Public Dog Park",

    lat: 43.48251,
    lng: -83.38813,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Parking available at Chippewa Landing Park",
    hours: "Unknown",

    seasonalClosure: null,
    accessNote: null,

    info: "Dog park at Chippewa Landing Park • Fenced off-leash use reported",

    location: "Chippewa Landing Park, Caro, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source + secondary amenity verification",
    source: "City of Caro / DogPack",
    sourceUrl: "https://www.carocity.net/sites/g/files/vyhlif6776/f/pages/final_draft_five-yearparksandrecmasterplan.pdf"
},

{
    name: "Fort Gratiot PetSafe Canine Commons",
    parkType: "Public Dog Park",

    lat: 43.04686,
    lng: -82.47592,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Drinking fountain with self-draining dog bowl",
    wasteBags: "Dog waste bags and trash receptacles available",
    parking: "Parking available",
    hours: "Dawn to dusk",

    seasonalClosure: null,
    accessNote: "Free public dog park • Open year round • Temporary maintenance closures possible",

    info: "FREE • Two-acre dog park • Two fenced areas • Separate small/medium and medium/large areas • Water • Waste bags",

    location: "4788 Parker Road, Fort Gratiot, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "Fort Gratiot Charter Township",
    sourceUrl: "https://www.fortgratiot.us/services/township-parks/fort-gratiot-petsafe-canine-commons-dog-park/"
},

{
    name: "Northern Tail Dog Park",
    parkType: "Public Dog Park",

    lat: 42.76832,
    lng: -84.47889,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Unknown",
    wasteBags: "Dog waste stations available",
    parking: "Parking available at recreation complex",
    hours: "6:00 AM - 10:00 PM",

    seasonalClosure: null,
    accessNote: "Free admission • Small-dog area for dogs under 22 lb",

    info: "FREE • 2.5 acres • Off-leash • 6-foot fenced • Double-gated • Separate small-dog area • Waste stations",

    location: "6400 Abbot Road, East Lansing, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "City of East Lansing",
    sourceUrl: "https://www.cityofeastlansing.com/m/NewsFlash/Home/Detail/2500"
},

{
    name: "Thompson Road Regional Dog Park",
    parkType: "Public Dog Park",

    lat: 42.8637,
    lng: -83.7016,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Drinking water available",
    wasteBags: "Waste stations reported",
    parking: "Unpaved parking area",
    hours: "Unknown",

    seasonalClosure: null,
    accessNote: "Free to the public",

    info: "FREE • Off-leash • Fenced • Separate dog areas • Drinking water • Community-supported dog park",

    location: "1325 W Thompson Road, Fenton Township, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "Fenton Charter Township",
    sourceUrl: "https://www.fentontownship.org/community-dept/park/thompson-road-regional-dog-park"
},

{
    name: "Grand Ravines Dog Park",
    parkType: "Public Dog Park",

    lat: 42.94306,
    lng: -85.88180,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Dog drinking fountains available spring through fall",
    wasteBags: "Unknown",
    parking: "Parking available at Grand Ravines South",
    hours: "Unknown",

    seasonalClosure: null,
    accessNote: "Free to the public",

    info: "FREE • Off-leash • Fenced trails • Dog drinking fountains • Dog wash station • Shade structures",

    location: "Grand Ravines South, Fillmore Street, Jenison, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "Ottawa County Parks & Recreation",
    sourceUrl: "https://miottawa.org/parks/grand-ravines-dog-park/"
},

{
    name: "Hastings Dog Park",
    parkType: "Public Dog Park",

    lat: 42.65088,
    lng: -85.29913,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Dog drinking fountain",
    wasteBags: "Waste removal tools and trash receptacles available",
    parking: "Gravel parking lot",
    hours: "Dawn to dusk",

    seasonalClosure: null,
    accessNote: "Free and open to the public",

    info: "FREE • Off-leash • Separate fenced large & small dog areas • Water • Agility equipment • Benches",

    location: "825 W Apple Street, Hastings, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "City of Hastings",
    sourceUrl: "https://www.hastingsmi.gov/wp-content/uploads/2024-2028-Park-and-Recreation-Master-Plan.pdf"
},

{
    name: "Betty's Dog Park",
    parkType: "Public Dog Park",

    lat: 42.25090,
    lng: -84.41231,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Street/park parking available",
    hours: "Unknown",

    seasonalClosure: null,
    accessNote: "Free and open to residents and visitors",

    info: "FREE • Fully fenced • Secure gate system • Separate big & small dog areas • Walking paths • Shade",

    location: "400 N Blackstone Street, Jackson, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "City of Jackson",
    sourceUrl: "https://www.cityofjackson.org/Facilities/Facility/Details/Bettys-Dog-Park-8"
},

{
    name: "Wahlfield Dog Park",
    parkType: "Public Dog Park",

    lat: 43.0997,
    lng: -85.6894,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Drinking fountain and dog wash station",
    wasteBags: "Waste receptacles available",
    parking: "Dedicated parking available",
    hours: "7:00 AM - sunset",

    seasonalClosure: null,
    accessNote: "Opened July 2026 • Dogs must be spayed or neutered • Maximum two dogs per handler",

    info: "FREE • 10 acres • Fully enclosed • 1-acre small-dog area • Swimming pond • Dog beach • Jumping dock • Dog wash",

    location: "7117 M-37, Comstock Park, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "Kent County Parks",
    sourceUrl: "https://www.kentcountymi.gov/Facilities/Facility/Details/-91"
},

{
    name: "Midland Dog Park",
    parkType: "Public Dog Park",

    lat: 43.61124,
    lng: -84.25434,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Seasonal water source",
    wasteBags: "Waste bags provided",
    parking: "Gravel parking area near dog park",
    hours: "8:00 AM - dusk",

    seasonalClosure: null,
    accessNote: "Water available during warm-weather months",

    info: "4 acres • Fenced • Off-leash • Separate small-dog area • Seasonal water • Agility equipment • Waste bags",

    location: "Chippewassee Park, Midland, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "City of Midland",
    sourceUrl: "https://mi-midland.civicplus.com/253/Midland-Dog-Park"
},

{
    name: "Davison Area Dog Park",
    parkType: "Public Dog Park",

    lat: 43.0234,
    lng: -83.5260,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: true,
    fenced: null,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Fire hydrant watering stations",
    wasteBags: "Unknown",
    parking: "Parking available at dog park",
    hours: "Dawn to dusk",

    seasonalClosure: null,
    accessNote: "Open year-round • Restrooms are seasonal",

    info: "Three-acre off-leash dog park • Small-dog and all-dog areas • Watering stations • Pavilions",

    location: "1285 N Gale Road, Davison, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "Davison Township",
    sourceUrl: "https://davisontwp-mi.gov/parks-rec-2/"
},

{
    name: "Arise Community Dog Park",
    parkType: "Community Dog Park",

    lat: 42.4564,
    lng: -83.9447,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,

    rv: null,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Dog pool available",
    wasteBags: "Unknown",
    parking: "Parking available in church parking lot",
    hours: "Daylight to dusk Monday-Saturday • Noon to dusk Sunday",

    seasonalClosure: null,
    accessNote: "No charge to use the park",

    info: "Free community off-leash dog park • Fenced • Separate small-dog area • Community dog toys • Dog pool",

    location: "11211 Dexter-Pinckney Road, Pinckney, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "Arise Church",
    sourceUrl: "https://www.arisechurch.org/dog-park"
},

{
    name: "Brighton Township Veterans Park Dog Run",
    parkType: "Public Dog Park",

    lat: 42.5239,
    lng: -83.7526,

    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: null,
    parkingVanClassB: "Unknown",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",

    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Parking available at Veterans Park",
    hours: "Unknown",

    seasonalClosure: null,
    accessNote: "Dog park reopened August 20, 2026 following park improvements",

    info: "Public dog run at Brighton Township Veterans Park • Fee/free status needs field verification",

    location: "5330 S Old US 23, Brighton, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source",
    source: "Brighton Township",
    sourceUrl: "https://www.brightontwp.com/294/Veterans-Park"
},

{
    name: "Paw Playground - Cascades Humane Society",
    parkType: "Community Dog Park",
    lat: 42.27199,
    lng: -84.38997,
    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",
    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,
    rv: null,
    parkingVanClassB: "Unknown",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",
    water: "Unknown",
    wasteBags: "Bags and trash cans provided",
    parking: "Unknown",
    hours: "Dawn to dusk",
    accessNote: "Free; complete membership agreement before use. Current dog license and vaccinations required. Map pin marks CHS; dog park is adjacent.",
    location: "1515 Carmen Drive, Jackson, Michigan",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source; separation reported by BringFido; CHS map location from Waze",
    source: "Cascades Humane Society",
    sourceUrl: "https://www.chspets.com/paw-playground/"
},

{
    name: "Whitmore Lake Bark Park",
    parkType: "Public Dog Park",
    lat: 42.4190535,
    lng: -83.7657238,
    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",
    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,
    rv: null,
    parkingVanClassB: "Unknown",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Parking at Jennings Road Athletic Complex; RV fit unverified",
    hours: "Dawn to dusk",
    seasonalClosure: "Open in winter; no winter maintenance",
    accessNote: "At rear of athletic complex near running track. Fee/free status not explicitly confirmed by township.",
    location: "168 Jennings Road, Whitmore Lake, Michigan",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source; map location from local tourism bureau",
    source: "Northfield Township",
    sourceUrl: "https://www.twp-northfield.org/newsdetail_T10_R9.php"
},

{
    name: "Chelsea Dog Park",
    parkType: "Membership Dog Park",
    lat: 42.3283167,
    lng: -84.0110535,
    status: "fee",
    statusLabel: "🔴 FEE REQUIRED",
    offleash: true,
    fenced: null,
    lighted: null,
    separated: null,
    rv: null,
    parkingVanClassB: "Unknown",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Unknown",
    hours: "Dawn to dusk",
    accessNote: "Annual registration required before use. $25 city residents / $35 nonresidents. Keyless entry; register through Chelsea City Offices.",
    location: "680 McKinley Street, Chelsea, Michigan",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source; map location from OpenStreetMap",
    source: "City of Chelsea",
    sourceUrl: "https://city-chelsea.org/services/parks___recreation/chelsea_dog_park.php"
},

{
    name: "Countryside Veterinary Dog Park",
    parkType: "Membership Dog Park",
    lat: 42.61008,
    lng: -83.95522,
    status: "fee",
    statusLabel: "🔴 FEE REQUIRED",
    offleash: true,
    fenced: true,
    lighted: true,
    separated: true,
    rv: null,
    parkingVanClassB: "Unknown",
    parkingClassC: "Unknown",
    parkingClassA: "Unknown",
    parkingPullBehind: "Unknown",
    parkingSemi: "Unknown",
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Behind County Dispatch building; RV fit unverified",
    hours: "Dawn to dusk; winter evening hours may vary",
    accessNote: "Annual membership: $60 residents / $70 nonresidents, up to two household dogs. Application, dog license, vaccination records and entry FOB required.",
    location: "400 S Highlander Way, Howell, Michigan",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source; map location from OpenStreetMap via Mapcarta",
    source: "Howell Area Parks & Recreation Authority",
    sourceUrl: "https://www.howellrecreation.org/countryside-veterinary-dog-park-1"
},

{
    name: "Field of Dreams Dog Park - Buchanan",
    parkType: "Public Dog Park",
    lat: 41.8224557,
    lng: -86.3644178,
    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",
    offleash: true,
    fenced: null,
    lighted: null,
    separated: null,
    rv: null,
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Unknown",
    hours: "Unknown",
    accessNote: "City-owned, volunteer-run dog park. Fee/free status needs confirmation. Approximate street-address pin; verify entrance on arrival.",
    location: "400 McCoy Creek Drive, Buchanan, Michigan",
    lastVerified: "September 15, 2026",
    verificationMethod: "City source and opening coverage; approximate address geocoding; no field verification",
    source: "City of Buchanan",
    sourceUrl: "https://www.cityofbuchanan.com/public-services/page/field-dreams-dog-park"
},

{
    name: "Sturgis Bark Park (Old Depot)",
    parkType: "Public Dog Park",
    lat: 41.804549,
    lng: -85.420412,
    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",
    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,
    rv: null,
    water: "Watering stations listed by city; seasonal availability unverified",
    wasteBags: "Unknown",
    parking: "Parking available; RV fit unverified",
    hours: "Dawn to dusk",
    accessNote: "Separate large- and small-dog areas. Fee/free status needs confirmation. Pin uses city-listed street address.",
    location: "200 W Main Street, Sturgis, Michigan",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source and park rules; address geocoded; no field verification",
    source: "City of Sturgis",
    sourceUrl: "https://www.sturgismi.gov/Facilities/Facility/Details/Bark-Park-1"
},

{
    name: "Vassar Dog Park",
    parkType: "Public Dog Park",
    lat: 43.3665625,
    lng: -83.5843125,
    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",
    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,
    rv: null,
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Unknown",
    hours: "Unknown",
    accessNote: "City confirms park on Water Street. Free grand-opening event does not establish current admission policy; confirm fee/free status.",
    location: "Water Street, Vassar, Michigan",
    lastVerified: "September 15, 2026",
    verificationMethod: "City opening announcement; amenities and map location from DogPack; no field verification",
    source: "City of Vassar / DogPack",
    sourceUrl: "https://www.cityofvassar.org/Calendar.aspx?EID=666"
},

{
    name: "Marlette Community Park Dog Park",
    parkType: "Public Dog Park",
    lat: 43.3302595,
    lng: -83.0741575,
    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",
    offleash: null,
    fenced: null,
    lighted: null,
    separated: null,
    rv: null,
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Unknown",
    hours: "Unknown",
    accessNote: "Opened September 2025. Fee/free status, enclosure details and hours need confirmation. Pin marks community park grounds, not a verified dog-park entrance.",
    location: "Marlette Community Park, Chard Street, Marlette, Michigan",
    lastVerified: "September 15, 2026",
    verificationMethod: "Park operator opening announcement; community-park location from OpenStreetMap; no field verification",
    source: "Marlette Park + Pool",
    sourceUrl: "https://www.facebook.com/marletteparkandpool/posts/another-wonderful-morning-in-our-beautiful-park-to-celebrate-the-grand-opening-o/1109980881259118/"
},

{
    name: "Iron King Dog Park",
    parkType: "Public Dog Park",
    lat: 46.45813,
    lng: -90.13823,

    status: "free",
    statusLabel: "🟢 FIELD VERIFIED FREE",

    offleash: true,
    fenced: true,
    lighted: false,
    separated: false,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Water bowl available; no faucet/spigot",
    wasteBags: "Poop bags available",
    parking: "No dedicated parking lot; roadside parking with room for vehicles up to semi size",

    info: "FIELD VERIFIED • FREE • Fully fenced • One shared dog area • Double-gated entry • No lights • No toys/agility equipment • Water bowl available but no faucet/spigot • Poop bags • No restroom • Good cell service • Secure, well-maintained fencing with no observed gaps",

    location: "E Ayer St & Bonnie St, Ironwood, Michigan",

    lastVerified: "October 1, 2026",
    verificationMethod: "Field verified in person",
    source: "Free Dog Park App field verification",

    accessNote: "Double-gated entry. Gate may accommodate a small wheelchair base; wider wheelchair access was not confirmed.",

    fieldTestTrip: "Western Adventure 2026",
    fieldTestPriority: "COMPLETED",
    fieldVerified: true
},

// --------------------------------- MICHIGAN TRAVEL STOPS -----------------------------------

{
    name: "Love's Travel Stop #336 Dog Park",
    parkType: "Travel Stop Dog Park",

    lat: 42.280206,
    lng: -84.930730,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Unknown",
    wasteBags: "Waste bags and receptacles available",
    parking: "Truck-accessible travel stop parking",
    hours: "24 hours",

    info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
    location: "18720 Partello Rd, Marshall, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source + field verified",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/mi/marshall/loves-travel-stop-marshall-336"
},

{
    name: "Love's Travel Stop #878 Dog Park",
    parkType: "Travel Stop Dog Park",

    lat: 42.374803,
    lng: -85.659821,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Unknown",
    wasteBags: "Waste bags and receptacles available",
    parking: "RV-friendly and truck parking",
    hours: "24 hours",

    info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
    location: "7900 Adobe Road, Alamo, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source + field verified",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/mi/alamo/loves-travel-stop-alamo-878"
},

{
    name: "Love's Travel Stop #785 Dog Park",
    parkType: "Travel Stop Dog Park",

    lat: 42.785290,
    lng: -84.668084,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Unknown",
    wasteBags: "Waste bags and receptacles available",
    parking: "RV-friendly and truck parking",
    hours: "24 hours",

    info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
    location: "7300 West Grand River Ave, Grand Ledge, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source + field verified",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/mi/grand-ledge/loves-travel-stop-grand-ledge-785"
},

{
    name: "Love's Travel Stop #743 Dog Park",
    parkType: "Travel Stop Dog Park",

    lat: 43.348709,
    lng: -83.861776,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Unknown",
    wasteBags: "Waste bags and receptacles available",
    parking: "RV-friendly and truck parking",
    hours: "24 hours",

    info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
    location: "6560 Dixie Highway, Bridgeport, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source + field verified",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/mi/bridgeport/loves-travel-stop-bridgeport-743"
},

{
    name: "Love's Travel Stop #742 Dog Park",
    parkType: "Travel Stop Dog Park",

    lat: 42.782791,
    lng: -86.023202,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Unknown",
    wasteBags: "Waste bags and receptacles available",
    parking: "Truck-accessible travel stop parking",
    hours: "24 hours",

    info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
    location: "9790 Adams St, Holland, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source + field verified",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/mi/holland/loves-travel-stop-holland-742"
},

{
    name: "Love's Travel Stop #757 Dog Park",
    parkType: "Travel Stop Dog Park",

    lat: 42.076541,
    lng: -83.667902,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Unknown",
    wasteBags: "Waste bags and receptacles available",
    parking: "RV-friendly and truck parking",
    hours: "24 hours",

    info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
    location: "14137 Plank Road, Milan, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source + field verified",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/mi/milan/loves-travel-stop-milan-757"
},

{
    name: "Love's Travel Stop #745 Dog Park",
    parkType: "Travel Stop Dog Park",

    lat: 42.865257,
    lng: -82.558108,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Unknown",
    wasteBags: "Waste bags and receptacles available",
    parking: "RV-friendly and truck parking",
    hours: "24 hours",

    info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",
    location: "1336 Wadhams Road, St. Clair, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source + field verified",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/mi/st.-clair/loves-travel-stop-st.-clair-745"
},

{
    name: "Love's Travel Stop #701 Dog Park",
    parkType: "Travel Stop Dog Park",

    lat: 42.98945,
    lng: -82.92941,

    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",

    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Unknown",
    wasteBags: "Waste bags and receptacles available",
    parking: "RV-friendly parking • 105 truck spaces",
    hours: "24 hours",

    seasonalClosure: null,
    accessNote: null,

    info: "Love's Travel Stop • Fully fenced off-leash dog park • Open 24/7",

    location: "3191 Capac Rd, Capac, Michigan",

    lastVerified: "September 2026",
    verificationMethod: "Official source + field verified",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/mi/capac/loves-travel-stop-capac-701"
},

// ================================================================================================================
// OHIO
// ================================================================================================================

// ---------------------------- PUBLIC / COMMUNITY -----------------------------

{
    name: "Middlegrounds Metropark Off-Leash Area",
    parkType: "Public Dog Park",
    lat: 41.6401483,
    lng: -83.5373685,
    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",
    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,
    rv: null,
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "RV suitability unverified",
    hours: "Check posted park hours",
    seasonalClosure: "Closed when wet; check Metroparks notices after rain",
    accessNote: "No fee or membership required. Dogs must be licensed, vaccinated, spayed/neutered and at least four months old. Pin uses park street address.",
    location: "111 Ottawa Street, Toledo, Ohio",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source; address geocoded; no field verification",
    source: "Metroparks Toledo",
    sourceUrl: "https://metroparkstoledo.com/features-and-rentals/off-leash-dog-area/"
},

{
    name: "K-9 Field of Dreams Dog Park",
    parkType: "Public Dog Park",
    lat: 41.0348057,
    lng: -83.5835187,
    status: "unknown",
    statusLabel: "🟡 NEEDS VERIFICATION",
    offleash: true,
    fenced: true,
    lighted: null,
    separated: true,
    rv: null,
    water: "Water listed in official brochure; seasonal availability unverified",
    wasteBags: "Unknown",
    parking: "Parking and restrooms nearby; RV fit unverified",
    hours: "Sunrise to sunset, every day",
    accessNote: "Small-dog area for dogs 30 lb and under. Fee/free status needs confirmation. Approximate park-address pin; follow signs to Meadows Activity Area.",
    location: "Riverbend Recreation Area, 16618 Township Road 208, Findlay, Ohio",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source; approximate address geocoding; no field verification",
    source: "Hancock Park District",
    sourceUrl: "https://hancockparks.com/k-9-field-of-dreams-dog-park/"
},

// --------------------------------- OHIO TRAVEL STOPS -----------------------------------

{
    name: "Love's Travel Stop #748 Dog Park",
    parkType: "Travel Stop Dog Park",
    lat: 41.627561,
    lng: -84.767331,
    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",
    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,
    rv: true,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Likely suitable",
    parkingClassA: "Likely suitable",
    parkingPullBehind: "Likely suitable",
    parkingSemi: "Likely suitable",
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Truck and RV parking; dedicated RV spaces listed.",
    info: "Free fenced off-leash dog park. Map pin marks the travel stop.",
    location: "14553 State Route 49, Edon, Ohio",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source; no field verification",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/oh/edon/loves-travel-stop-edon-748"
},

{
    name: "Love's Travel Stop #841 Dog Park",
    parkType: "Travel Stop Dog Park",
    lat: 41.416321,
    lng: -84.106962,
    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",
    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,
    rv: true,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Likely suitable",
    parkingClassA: "Likely suitable",
    parkingPullBehind: "Likely suitable",
    parkingSemi: "Likely suitable",
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Truck parking available; RV maneuvering not field verified.",
    info: "Free fenced off-leash dog park. Map pin marks the travel stop.",
    location: "775 American Road, Napoleon, Ohio",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source; no field verification",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/oh/napoleon/loves-travel-stop-napoleon-841"
},

{
    name: "Love's Travel Stop #356 Dog Park",
    parkType: "Travel Stop Dog Park",
    lat: 41.17372,
    lng: -83.65167,
    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",
    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,
    rv: true,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Likely suitable",
    parkingClassA: "Likely suitable",
    parkingPullBehind: "Likely suitable",
    parkingSemi: "Likely suitable",
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Truck parking and RV-friendly parking listed.",
    info: "Free fenced off-leash dog park. Map pin marks the travel stop.",
    location: "13190 Deshler Road, North Baltimore, Ohio",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source; no field verification",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/oh/north-baltimore/loves-travel-stop-north-baltimore-356"
},

{
    name: "Love's Travel Stop #456 Dog Park",
    parkType: "Travel Stop Dog Park",
    lat: 41.537233,
    lng: -83.466653,
    status: "free",
    statusLabel: "🟢 CONFIRMED FREE",
    offleash: true,
    fenced: true,
    lighted: null,
    separated: null,
    rv: true,
    parkingVanClassB: "Likely suitable",
    parkingClassC: "Likely suitable",
    parkingClassA: "Likely suitable",
    parkingPullBehind: "Likely suitable",
    parkingSemi: "Likely suitable",
    water: "Unknown",
    wasteBags: "Unknown",
    parking: "Truck parking available; RV maneuvering not field verified.",
    info: "Free fenced off-leash dog park. Map pin marks the travel stop.",
    location: "26530 Baker Road, Perrysburg, Ohio",
    lastVerified: "September 15, 2026",
    verificationMethod: "Official source; no field verification",
    source: "Love's Travel Stops",
    sourceUrl: "https://www.loves.com/locations/oh/perrysburg/loves-travel-stop-perrysburg-456"
},

// ================================================================================================================
// WISCONSIN
// ================================================================================================================

// ---------------------------- PUBLIC / COMMUNITY -----------------------------

{
    name: "Ashland Dog Park",
    parkType: "Public Dog Park",
    lat: 46.592667,
    lng: -90.861458,

    status: "free",
    statusLabel: "🟢 FIELD VERIFIED FREE",

    offleash: true,
    fenced: true,
    lighted: false,
    separated: false,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",
    parkingSemi: "Verified",

    water: "Water bowls/containers available; no faucet or spigot",
    wasteBags: "Poop bags available",
    parking: "Gravel access lane with parking suitable for vehicles up to semi size",

    info: "FIELD VERIFIED • FREE • Fully fenced • One shared dog area • Two double-gated entrances • No lights • One agility feature • Water bowls/containers available but no faucet/spigot • Poop bags • No restroom • Good cell service • Wheelchair accessible • Mixed grass/dirt surface • Shade • Picnic tables • Trash can • Large running area • Well maintained",

    location: "Ashland, Wisconsin",

    lastVerified: "October 1, 2026",
    verificationMethod: "Field verified in person",
    source: "Free Dog Park App field verification",

    accessNote: "IMPORTANT NAVIGATION NOTE: Google Maps directs drivers to turn too early. Continue past the road indicated by Google Maps and take the first right after the 25 MPH sign. There is no dog park sign at the entrance. Gravel access lane leads to the park. Two double-gated entrances. Wheelchair access field verified.",

    fieldTestTrip: "Western Adventure 2026",
    fieldTestPriority: "COMPLETED",
    coordinateSource: "Field-verified entrance pin, October 1, 2026",
    fieldVerified: true
},

{
    name: "Superior Dog Park",
    parkType: "Public Dog Park",
    lat: 46.68076,
    lng: -92.14915,

    status: "free",
    statusLabel: "🟢 FIELD VERIFIED FREE",

    offleash: true,
    fenced: true,
    lighted: false,
    separated: false,

    rv: true,
    parkingVanClassB: "Verified",
    parkingClassC: "Verified",
    parkingClassA: "Verified",
    parkingPullBehind: "Verified",

    water: "Water bowls available; water filler located at entrance",
    wasteBags: "Available",

    parking: "Large parking area at Millennium Trailhead; field verified",

    hours: "5:30 AM - 10:30 PM",

    info: "FIELD VERIFIED • FREE • Fully fenced • One shared dog area • No small/large dog separation • No lights • No toys/agility equipment • Water bowls available • Water filler at entrance • No restroom observed during field visit • Good cell service • Wheelchair can fit through gates • No observed gaps in fencing • Felt safe during field visit",

    location: "Millennium Trailhead, N 28th St & Wyoming Ave, Superior, Wisconsin",

    lastVerified: "October 1, 2026",
    verificationMethod: "Field verified in person + official city source",
    source: "City of Superior Parks, Recreation and Forestry",
    sourceUrl: "https://www.superiorwi.gov/839/Dog-Park",

    accessNote: "Google Maps directions were field verified as accurate. Wheelchair access through the gates was field verified.",

    fieldTestTrip: "Western Adventure 2026",
    fieldTestPriority: "COMPLETED",
    fieldVerified: true,
    coordinateSource: "Mapped location; Google Maps directions field verified accurate October 1, 2026",
},

];

// Western Adventure - section 1 of 2: checklist parks
(() => {
  const defaults = {
    "offleash": true,
    "lighted": null,
    "parkingClassC": "Unknown",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "lastVerified": "September 26, 2026 (web research only)",
    "fieldTestTrip": "Western Adventure 2026",
    "fieldVerified": false
  };
  const additions = [
{"name":"Keene Creek Dog Park","parkType":"Public Dog Park","lat":46.73579,"lng":-92.17549,"status":"free","statusLabel":"🟢 FREE - SOURCE CHECKED","fenced":true,"separated":true,"rv":null,"parkingVanClassB":"Unknown","water":"Seasonal; shut off in winter","wasteBags":"Unknown","parking":"Lower lot: 28 N 62nd Ave W. Upper lot: 6220 Bristol St. RV fit unverified.","hours":"8 AM - 10 PM daily","info":"Free, fenced park. Check the map pin, parking entrance and gate. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","location":"Duluth, MN","verificationMethod":"Web sources; no field verification. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","source":"Park/operator information","sourceUrl":"https://www.duluthdogparks.com/locations/keene-creek-dog-park","accessNote":"Map pin is a geocoded park location; exact parking entrance and gate need field verification.","plannedVisit":"Oct. 3","fieldTestPriority":"PRIORITY","coordinateSource":"Esri World Geocoding Service, September 26, 2026","feeSourceUrl":"https://www.duluthdogparks.com/"},
{"name":"Brandt Crossing Dog Park","parkType":"Public Dog Park","lat":46.8312066,"lng":-96.8715232,"status":"free","statusLabel":"🟢 FREE - SOURCE CHECKED","fenced":true,"separated":true,"rv":null,"parkingVanClassB":"Unknown","water":"Unknown","wasteBags":"Unknown","parking":"Parking layout and RV suitability not field verified.","hours":"Dawn to dusk, weather and turf permitting","info":"Separate large/small sections. Test the small-dog filter for Sunnie. Map pin uses the park district coordinates; exact dog-park gate needs field verification.","location":"Fargo, ND | 5009 33rd Avenue S","verificationMethod":"Web sources; no field verification. Map pin uses the park district coordinates; exact dog-park gate needs field verification.","source":"Park/operator information","sourceUrl":"https://fargoparks.com/parks-and-facilities/brandt-crossing-park-dog-park","accessNote":"Map pin uses the park district coordinates; exact dog-park gate needs field verification.","plannedVisit":"Oct. 3-4","fieldTestPriority":"PRIORITY","coordinateSource":"Fargo Park District","feeSourceUrl":"https://www.fargomoorhead.org/listing/brandt-crossing-dog-park/797/"},
{"name":"Love's #602 Dog Park","parkType":"Travel Stop Dog Park","lat":44.1203971,"lng":-103.0520505,"status":"unknown","statusLabel":"🟡 FEE NEEDS VERIFICATION","fenced":true,"separated":null,"rv":true,"parkingVanClassB":"Likely suitable","water":"Unknown","wasteBags":"Bags and waste stations listed by Love's; stock unverified","parking":"Operator lists RV-friendly and truck parking. Paid overnight RV spaces are separate from dog-park use.","hours":"24 hours per Love's dog-park program","info":"Retest Travel Stop + Free together. Confirm enclosure and parking. Map pin marks the published street address, not a verified dog-park gate.","location":"679 Reagan Ave, Box Elder, South Dakota","verificationMethod":"Web sources; no field verification. Map pin marks the published street address, not a verified dog-park gate.","source":"Love's Travel Stops","sourceUrl":"https://www.loves.com/locations/sd/box-elder/loves-travel-stop-box-elder-602","accessNote":"Map pin marks the published street address, not a verified dog-park gate. Fee not confirmed; this entry is hidden when Free is selected.","plannedVisit":"Oct. 6","fieldTestPriority":"PRIORITY","coordinateSource":"Esri World Geocoding Service, September 26, 2026","additionalSourceUrls":["https://www.loves.com/promos/dogparks"]},
{"name":"Morad Park","parkType":"Public Dog Park","lat":42.82337,"lng":-106.37059,"status":"unknown","statusLabel":"🟡 FEE NEEDS VERIFICATION","fenced":false,"separated":null,"rv":null,"parkingVanClassB":"Unknown","water":"River access; drinking-water supply unknown","wasteBags":"Bags and waste stations listed by city","parking":"Parking layout and RV suitability not field verified.","hours":"Unknown","info":"Unfenced, with river access. Check barrier label; keep Sunnie leashed. Tight travel day. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","location":"Casper, WY | 2800 Wyoming Blvd SW","verificationMethod":"Web sources; no field verification. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","source":"Park/operator information","sourceUrl":"https://www.casperwy.gov/business_detail_T11_R172.php","accessNote":"Map pin is a geocoded park location; exact parking entrance and gate need field verification. Fee not confirmed; this entry is hidden when Free is selected. Unfenced; no entrance gates.","plannedVisit":"Oct. 8-9","fieldTestPriority":"OPTIONAL","coordinateSource":"Esri World Geocoding Service, September 26, 2026"},
{"name":"Paws Park at Centennial Park","parkType":"Public Dog Park","lat":46.599398,"lng":-112.031321,"status":"free","statusLabel":"🟢 REPORTED FREE - VERIFY ON ARRIVAL","fenced":true,"separated":true,"rv":null,"parkingVanClassB":"Unknown","water":"Seasonal; operating status unverified","wasteBags":"Unknown","parking":"Parking layout and RV suitability not field verified.","hours":"Unknown","info":"Separate large/small areas. Water is seasonal: check whether it is running. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","location":"Helena, MT","verificationMethod":"Web sources; no field verification. Map pin is a geocoded park location; exact parking entrance and gate need field verification. Free entry reported by a secondary directory; verify locally.","source":"Park/operator information","sourceUrl":"https://helenamt.com/dog-friendly/","accessNote":"Map pin is a geocoded park location; exact parking entrance and gate need field verification.","plannedVisit":"Oct. 12","fieldTestPriority":"PRIORITY","coordinateSource":"Esri World Geocoding Service, September 26, 2026","feeSourceUrl":"https://doggiecaboodle.com/dogpark/paws-park-dog-park/?unit=us"},
{"name":"High Bridge Dog Park","parkType":"Public Dog Park","lat":47.652948,"lng":-117.455125,"status":"free","statusLabel":"🟢 REPORTED FREE - VERIFY ON ARRIVAL","fenced":true,"separated":true,"rv":null,"parkingVanClassB":"Unknown","water":"Unknown","wasteBags":"Unknown","parking":"City lists expanded paved parking; RV fit unverified.","hours":"Unknown","info":"Renovated large/small areas and paved parking. Check entrance and current layout. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","location":"Spokane, WA | 330 S. A St.","verificationMethod":"Web sources; no field verification. Map pin is a geocoded park location; exact parking entrance and gate need field verification. Free entry reported by a secondary directory; verify locally.","source":"Park/operator information","sourceUrl":"https://my.spokanecity.org/parks/dogs/","accessNote":"Map pin is a geocoded park location; exact parking entrance and gate need field verification.","plannedVisit":"Oct. 15-16","fieldTestPriority":"PRIORITY","coordinateSource":"Esri World Geocoding Service, September 26, 2026","feeSourceUrl":"https://www.spokanehyundai.net/blog/best-dog-parks-near-spokane-wa/"},
{"name":"Benton Dog Park","parkType":"Public Dog Park","lat":40.5777,"lng":-122.4063,"status":"free","statusLabel":"🟢 REPORTED FREE - VERIFY ON ARRIVAL","fenced":true,"separated":null,"rv":null,"parkingVanClassB":"Unknown","water":"Unknown","wasteBags":"Unknown","parking":"Parking layout and RV suitability not field verified.","hours":"Unknown","info":"Use the Redding reset stop to check the pin, entrance and listed amenities. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","location":"Redding, CA | 1700 Airpark Dr.","verificationMethod":"Web sources; no field verification. Map pin is a geocoded park location; exact parking entrance and gate need field verification. Free entry reported by a secondary directory; verify locally.","source":"Park/operator information","sourceUrl":"https://files.cityofredding.gov/government/departments/parks_and_recreation/park_finder.php","accessNote":"Map pin is a geocoded park location; exact parking entrance and gate need field verification.","plannedVisit":"Oct. 17-18","fieldTestPriority":"FLEXIBLE","coordinateSource":"Esri World Geocoding Service, September 26, 2026","feeSourceUrl":"https://doggiecaboodle.com/dogpark/benton-dog-park/"},
{"name":"Craig Ranch dog areas","parkType":"Public Dog Park","lat":36.246,"lng":-115.1526,"status":"free","statusLabel":"🟢 REPORTED FREE - VERIFY ON ARRIVAL","fenced":true,"separated":true,"rv":null,"parkingVanClassB":"Unknown","water":"Unknown","wasteBags":"Unknown","parking":"Parking layout and RV suitability not field verified.","hours":"Unknown","info":"Three dog parks within the regional park. Does navigation reach the right entrance? Map pin is a geocoded park location; exact parking entrance and gate need field verification.","location":"North Las Vegas, NV | Craig Ranch Regional Park","verificationMethod":"Web sources; no field verification. Map pin is a geocoded park location; exact parking entrance and gate need field verification. Free entry reported by a secondary directory; verify locally.","source":"Park/operator information","sourceUrl":"https://www.cityofnorthlasvegas.com/things-to-do/parks-and-recreation/parks/craig-ranch-regional-park","accessNote":"Map pin is a geocoded park location; exact parking entrance and gate need field verification.","plannedVisit":"Oct. 23","fieldTestPriority":"FLEXIBLE","coordinateSource":"Esri World Geocoding Service, September 26, 2026","feeSourceUrl":"https://www.dogpackapp.com/parks/united-states/nevada/north-las-vegas/craig-ranch-dog-park"},
{"name":"Blanca Vista Dog Park","parkType":"Public Dog Park","lat":37.5047284,"lng":-105.8804755,"status":"free","statusLabel":"🟢 REPORTED FREE - VERIFY ON ARRIVAL","fenced":null,"separated":null,"rv":null,"parkingVanClassB":"Unknown","water":"Dog swimming area; drinking-water supply unknown","wasteBags":"Unknown","parking":"Parking layout and RV suitability not field verified.","hours":"Dawn to dusk daily","info":"Dog park is at the south end of the larger park. Verify entrance-pin accuracy. Map pin marks the published street address, not a verified dog-park gate.","location":"6455 N River Rd, Alamosa, Colorado","verificationMethod":"Web sources; no field verification. Map pin marks the published street address, not a verified dog-park gate. Free entry reported by a secondary directory; verify locally.","source":"Park/operator information","sourceUrl":"https://www.alamosa.org/listing/blanca-vista-park-alamosa-colorado/","accessNote":"Map pin marks the published street address, not a verified dog-park gate.","plannedVisit":"Oct. 26","fieldTestPriority":"FLEXIBLE","coordinateSource":"Esri World Geocoding Service, September 26, 2026","feeSourceUrl":"https://www.dogpackapp.com/parks/united-states/colorado/alamosa/blanca-vista-park"},
{"name":"Wright Park dog park","parkType":"Public Dog Park","lat":37.7473,"lng":-100.02291,"status":"unknown","statusLabel":"🟡 FEE NEEDS VERIFICATION","fenced":null,"separated":null,"rv":null,"parkingVanClassB":"Unknown","water":"Unknown","wasteBags":"Unknown","parking":"Parking layout and RV suitability not field verified.","hours":"Unknown","info":"Two-night stop: repeat the search after changing filters and restarting the app. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","location":"Dodge City, KS","verificationMethod":"Web sources; no field verification. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","source":"Park/operator information","sourceUrl":"https://dodgecity.org/DocumentCenter/View/10110/Parks-and-Recreational-Facilites-parks","accessNote":"Map pin is a geocoded park location; exact parking entrance and gate need field verification. Fee not confirmed; this entry is hidden when Free is selected.","plannedVisit":"Oct. 28-29","fieldTestPriority":"FLEXIBLE","coordinateSource":"Esri World Geocoding Service, September 26, 2026"},
{"name":"Shreveport Dog Park","parkType":"Public Dog Park","lat":32.5008781,"lng":-93.7130137,"status":"free","statusLabel":"🟢 FREE - SOURCE CHECKED","fenced":true,"separated":true,"rv":null,"parkingVanClassB":"Unknown","water":"Unknown","wasteBags":"Unknown","parking":"Parking layout and RV suitability not field verified.","hours":"Daylight hours; closed Monday mornings for maintenance","info":"Separate large/small sides. Toys prohibited. Closed Monday mornings for maintenance. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","location":"Shreveport, LA | 857 E. Stoner Ave.","verificationMethod":"Web sources; no field verification. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","source":"Park/operator information","sourceUrl":"https://myspar.org/430/Shreveport-Dog-Park","accessNote":"Map pin is a geocoded park location; exact parking entrance and gate need field verification. No toys, balls or Frisbees allowed.","plannedVisit":"Oct. 31","fieldTestPriority":"PRIORITY","coordinateSource":"Esri World Geocoding Service, September 26, 2026","feeSourceUrl":"https://downtownshreveport.com/featured/dog-friendly-downtown/","toysAllowed":false},
{"name":"Switchyard Dog Park","parkType":"Public Dog Park","lat":39.146863,"lng":-86.536904,"status":"free","statusLabel":"🟢 FREE - SOURCE CHECKED","fenced":true,"separated":true,"rv":null,"parkingVanClassB":"Unknown","water":"Unknown","wasteBags":"Unknown","parking":"Closest listed lot: Rogers Street; approximately 1,666 feet to dog park. RV fit unverified.","hours":"5 AM - 11 PM (published park hours)","info":"Free; separate sections. Closest listed parking is about 1/3 mile away each way. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","location":"Bloomington, IN | 1601 S. Rogers St.","verificationMethod":"Web sources; no field verification. Map pin is a geocoded park location; exact parking entrance and gate need field verification.","source":"Park/operator information","sourceUrl":"https://switchyardpark.com/recreation/dog-park/","accessNote":"Map pin is a geocoded park location; exact parking entrance and gate need field verification. Dogs must be spayed/neutered, vaccinated and at least four months old. Small-dog area: 40 lb and under. Tennis balls only; other toys prohibited.","plannedVisit":"Nov. 5-6","fieldTestPriority":"OPTIONAL","coordinateSource":"Esri World Geocoding Service, September 26, 2026","feeSourceUrl":"https://switchyardpark.com/recreation/dog-park/"}
  ];
  for (const entry of additions) {
    const exists = parks.some(p => p.name === entry.name ||
      (Math.abs(p.lat - entry.lat) < 0.00001 && Math.abs(p.lng - entry.lng) < 0.00001));
    if (!exists) parks.push({ ...defaults, ...entry });
  }
})();

// Western Adventure - section 2 of 2: 42 additional Love's dog parks
(() => {
  const defaults = {
    "parkType": "Travel Stop Dog Park",
    "status": "unknown",
    "statusLabel": "🟡 DOG PARK CONFIRMED - FEE NOT VERIFIED",
    "offleash": true,
    "fenced": true,
    "lighted": null,
    "separated": null,
    "parkingClassC": "Unknown",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "water": "Unknown - bring drinking water",
    "wasteBags": "Waste stations with bags listed by Love's dog-park program; current stock not checked",
    "hours": "24 hours per Love's dog-park program; temporary closures possible",
    "lastVerified": "September 28, 2026 (operator listing)",
    "verificationMethod": "Dog-park flag and coordinates checked against current operator location record; not field verified.",
    "source": "Love's Travel Stops",
    "additionalSourceUrls": ["https://www.loves.com/promos/dogparks"],
    "fieldVerified": false,
    "fieldTestTrip": "Western Adventure 2026",
    "coordinateSource": "Love's operator location record"
  };
  // Store, latitude, longitude, RV parking, address, URL, phone, alternate road, route note
  const rows = [
[353,46.831448,-96.844139,true,"3220 39th St S, Fargo, ND 58104","https://www.loves.com/locations/nd/fargo/loves-travel-stop-fargo-353","(701) 281-0761",false,"Duluth-Fargo"],
[816,43.736356,-98.957259,true,"1100 S Main Street, Kimball, SD 57355","https://www.loves.com/locations/sd/kimball/loves-travel-stop-kimball-816","(605) 778-6140",false,"Larchwood-Chamberlain"],
[753,46.947602,-114.133598,true,"8077 Hwy 10 West, Missoula, MT 59808","https://www.loves.com/locations/mt/missoula/loves-travel-stop-missoula-753","(406) 721-8386",true,"Glacier-Spokane alternative via US-93 and I-90; not the US-2 route."],
[789,47.475031,-111.361108,false,"3219 Airport Drive, Great Falls, MT 59404","https://www.loves.com/locations/mt/great-falls/loves-travel-stop-great-falls-789","(406) 453-0632",true,"Helena-Glacier alternative via Great Falls; not the direct US-287 corridor."],
[514,47.11319,-118.36694,false,"1370 N Highway 261, Ritzville, WA 99169","https://www.loves.com/locations/wa/ritzville/loves-travel-stop-ritzville-514","(509) 659-1005",false,"Spokane-Crater Lake"],
[811,46.264151,-119.082472,true,"2252 E Kartchner St, Pasco, WA 99301","https://www.loves.com/locations/wa/pasco/loves-travel-stop-pasco-811","(509) 412-6432",false,"Spokane-Crater Lake"],
[681,46.219559,-119.79295,true,"700 Wine Country Rd, Prosser, WA 99350","https://www.loves.com/locations/wa/prosser/loves-travel-stop-prosser-681","(509) 786-1293",true,"Spokane-Oregon alternative via Prosser/I-82; depends on selected crossing."],
[650,45.825166,-119.798742,true,"78665 Tower Road, Boardman, OR 97818","https://www.loves.com/locations/or/boardman/loves-travel-stop-boardman-650","(541) 481-2934",false,"Spokane-Crater Lake"],
[795,44.61226,-121.137633,true,"1678 SE Highway 97, Madras, OR 97741","https://www.loves.com/locations/or/madras/loves-travel-stop-madras-795","(541) 675-6008",false,"Spokane-Crater Lake"],
[823,42.258046,-121.799445,true,"250 Dan O'brien Way, Klamath Falls, OR 97601","https://www.loves.com/locations/or/klamath-falls/loves-travel-stop-klamath-falls-823","(541) 363-4499",false,"Crater Lake-Redding"],
[410,39.907601,-122.196352,true,"2120 South Ave., Corning, CA 96021","https://www.loves.com/locations/ca/corning/loves-travel-stop-corning-410","(530) 824-8767",false,"Redding-Beale AFB"],
[652,39.167256,-122.14382,true,"100 Marguerite Street, Williams, CA 95987","https://www.loves.com/locations/ca/williams/loves-travel-stop-williams-652","(530) 473-3030",true,"Redding-Beale/Sacramento alternative via I-5/Williams; not necessarily the CA-99 route."],
[340,36.381561,-114.896529,true,"12501 Apex Great Basin Pkwy, Las Vegas, NV 89165","https://www.loves.com/locations/nv/las-vegas/loves-travel-stop-las-vegas-340","(702) 643-7398",false,"Las Vegas/Nellis area; north of Nellis, check driving detour"],
[272,35.19925,-113.90403,true,"6035 E. Minerva Lane, Kingman, AZ 86401","https://www.loves.com/locations/az/kingman/loves-travel-stop-kingman-272","(928) 681-4405",false,"Las Vegas-Grand Canyon"],
[959,37.471499,-105.857969,true,"138 Broadway Ave, Alamosa, CO 81101","https://www.loves.com/locations/co/alamosa/loves-travel-stop-alamosa-959","(719) 298-5219",false,"Durango-Alamosa"],
[660,37.616621,-104.75598,true,"99800 Interstate 25, Walsenburg, CO 81089","https://www.loves.com/locations/co/walsenburg/loves-travel-stop-walsenburg-660","(719) 738-2141",false,"Alamosa-Lamar via Walsenburg"],
[226,38.34223,-104.622979,false,"6470 N. Elizabeth St, Pueblo, CO 81008","https://www.loves.com/locations/co/pueblo/loves-travel-stop-pueblo-226","(719) 253-1338",false,"Alamosa-Lamar via Pueblo/US-50"],
[630,36.398834,-97.820024,true,"4104 E Randolph Ave, Enid, OK 73701","https://www.loves.com/locations/ok/enid/loves-travel-stop-enid-630","(580) 237-1901",true,"Dodge City-Davis alternative via Enid; not every route passes here."],
[737,35.496922,-97.902765,false,"3900 S Radio Rd, El Reno, OK 73036","https://www.loves.com/locations/ok/el-reno/loves-travel-stop-el-reno-737","(405) 422-1904",false,"Dodge City-Davis via I-40/El Reno"],
[203,35.457659,-97.688649,false,"800 S. Morgan Rd., Oklahoma City, OK 73128","https://www.loves.com/locations/ok/oklahoma-city/loves-travel-stop-oklahoma-city-203","(405) 789-0087",false,"Dodge City-Davis via Oklahoma City"],
[205,35.594066,-97.436685,false,"12225 N I-35, Oklahoma City, OK 73131","https://www.loves.com/locations/ok/oklahoma-city/loves-travel-stop-oklahoma-city-205","(405) 478-5766",false,"Dodge City-Davis via Oklahoma City"],
[260,35.183634,-97.49899,false,"5317 SE 44th St, Norman, OK 73072","https://www.loves.com/locations/ok/norman/loves-travel-stop-norman-260","(405) 364-0059",false,"Oklahoma City-Davis"],
[452,34.708611,-97.242519,false,"1601 Airline Road, Pauls Valley, OK 73075","https://www.loves.com/locations/ok/pauls-valley/loves-travel-stop-pauls-valley-452","(405) 207-9692",false,"Oklahoma City-Davis"],
[266,34.188225,-97.170773,false,"3201 12th Ave NW, Ardmore, OK 73401","https://www.loves.com/locations/ok/ardmore/loves-travel-stop-ardmore-266","(580) 226-0973",false,"Davis-Shreveport via Ardmore"],
[678,33.695401,-95.555286,false,"3215 N Main St, Paris, TX 75460","https://www.loves.com/locations/tx/paris/loves-travel-stop-paris-678","(903) 737-1950",false,"Davis-Shreveport via Paris"],
[852,33.472121,-94.461214,true,"2486 US Hwy-82 W, New Boston, TX 75570","https://www.loves.com/locations/tx/new-boston/loves-travel-stop-new-boston-852","(903) 417-6056",true,"Davis-Shreveport or Marshall-Arkansas route via New Boston/I-30."],
[473,33.463426,-94.204244,true,"451 Leary Road, Leary, TX 75501","https://www.loves.com/locations/tx/leary/loves-travel-stop-leary-473","(903) 838-0856",true,"Texarkana-area option; exact access depends on the selected highway."],
[673,33.261778,-94.152214,true,"22406 US Highway 59 N, Domino, TX 75572","https://www.loves.com/locations/tx/domino/loves-travel-stop-domino-673","(903) 796-1385",false,"Marshall-Marianna via US-59/Texarkana"],
[854,32.595937,-93.829384,true,"5430 N Market St, Shreveport, LA 71107","https://www.loves.com/locations/la/shreveport/loves-travel-stop-shreveport-854","(318) 761-7861",false,"Shreveport waypoint"],
[209,32.444532,-93.983016,false,"9600 Highway 80 W, Greenwood, LA 71033","https://www.loves.com/locations/la/greenwood/loves-travel-stop-greenwood-209","(318) 938-8986",false,"Shreveport-Marshall"],
[884,33.827533,-93.393831,true,"2005 Hwy 19 North, Prescott, AR 71857","https://www.loves.com/locations/ar/prescott/loves-travel-stop-prescott-884","(870) 330-8570",false,"Marshall-Marianna via I-30"],
[779,34.387581,-92.846531,true,"6716 Hwy 171, Malvern, AR 72104","https://www.loves.com/locations/ar/malvern/loves-travel-stop-malvern-779","(501) 337-9545",false,"Marshall-Marianna via I-30"],
[457,34.657214,-92.413231,true,"11700 I-30, Little Rock, AR 72210","https://www.loves.com/locations/ar/little-rock/loves-travel-stop-little-rock-457","(501) 407-0227",false,"Marshall-Marianna via Little Rock"],
[236,34.786217,-92.125573,false,"11801 I-40 Fwy, N Little Rock, AR 72117","https://www.loves.com/locations/ar/n-little-rock/loves-travel-stop-n-little-rock-236","(501) 945-5400",false,"Marshall-Marianna via Little Rock"],
[759,34.815314,-91.567393,true,"3404 Highway 63 N, Hazen, AR 72064","https://www.loves.com/locations/ar/hazen/loves-travel-stop-hazen-759","(870) 255-1395",false,"Little Rock-Marianna via I-40"],
[643,36.854011,-89.583918,true,"1401 South Main St, Sikeston, MO 63801","https://www.loves.com/locations/mo/sikeston/loves-travel-stop-sikeston-643","(573) 472-6428",false,"Doniphan-Giant City via US-60/Sikeston"],
[313,36.758179,-89.541289,true,"100 Love’s Industrial Dr., Matthews, MO 63867","https://www.loves.com/locations/mo/matthews/loves-travel-stop-matthews-313","(573) 471-4944",true,"Doniphan-Giant City alternative via I-55; not every route passes here."],
[981,36.919763,-89.313925,false,"2461 E Marshall St, Charleston, MO 63834","https://www.loves.com/locations/mo/charleston/loves-travel-stop-charleston-981","(573) 233-7038",false,"Doniphan-Giant City via US-60/Charleston"],
[803,37.745682,-88.949251,false,"1900 The Hill Ave, Marion, IL 62959","https://www.loves.com/locations/il/marion/loves-travel-stop-marion-803","(618) 944-6409",false,"Giant City-Garden of the Gods area"],
[318,38.155469,-88.910841,true,"202 North Ave., Ina, IL 62846","https://www.loves.com/locations/il/ina/loves-travel-stop-ina-318","(618) 437-5275",true,"Southern Illinois alternative via I-57; check detour from your chosen road."],
[824,38.27793,-88.903162,true,"3101 S 10th St, Mt Vernon, IL 62864","https://www.loves.com/locations/il/mt-vernon/loves-travel-stop-mt-vernon-824","(618) 731-7038",true,"Southern Illinois-Indiana alternative via I-57/I-64."],
[880,38.711902,-88.091835,false,"1503 S West St, Olney, IL 62450","https://www.loves.com/locations/il/olney/loves-travel-stop-olney-880","(618) 320-6039",true,"Garden of the Gods-Bloomington alternative via Olney; not the Evansville route."]
  ];
  const pin = 'Operator coordinates mark the travel stop, not the dog-park gate.';
  for (const [id, lat, lng, rv, location, sourceUrl, phone, alternate, routeNote] of rows) {
    const exists = parks.some(p => Number(p.lovesStoreNumber) === id ||
      (/love/i.test(p.name) && Number((p.name.match(/#(\d+)/) || [])[1]) === id));
    if (exists) continue;
    parks.push({
      ...defaults,
      name: "Love's Travel Stop #" + id + ' Dog Park',
      lat, lng,
      rv: rv ? true : null,
      parkingVanClassB: rv ? 'Likely suitable' : 'Unknown',
      parking: rv
        ? 'Operator lists RV-friendly parking; gate access and available spaces not field checked.'
        : 'Travel-stop parking; RV suitability and gate access not field checked.',
      info: 'Western Adventure: ' + routeNote + ' ' + pin,
      location, sourceUrl, phone,
      accessNote: routeNote + ' ' + pin + ' Dog-park fee is not explicitly stated in the operator listing; turn Free off to show this entry. Paid RV overnight stays are separate.',
      routeCategory: alternate ? 'Alternate corridor' : 'Route-area candidate',
      routeNote,
      lovesStoreNumber: id
    });
  }
})();

// Love's dog-park fees: traveler-reported update
for (const park of parks) {
  if (!/love['’]?s/i.test(park.name) || park.status !== "unknown") continue;

  park.status = "free";
  park.statusLabel = "🟢 FREE - REPORTED BY TRAVELER";
  park.feeVerificationMethod =
    "Traveler reports no dog-park charge at Love's locations known to her; individual locations not fee-verified.";
  park.feeLastUpdated = "September 28, 2026";

  park.accessNote = (park.accessNote || "")
    .replace(
      " Fee not confirmed; this entry is hidden when Free is selected.",
      ""
    )
    .replace(
      " Dog-park fee is not explicitly stated in the operator listing; turn Free off to show this entry.",
      ""
    );
}

// October 7, 2026: field visits, grouped by state.
(() => {
const visits = [
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fenced": true,
    "lighted": false,
    "separated": true,
    "rv": true,
    "parkingVanClassB": "Verified",
    "parkingClassC": "Verified",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Verified",
    "hours": "Sunrise to sunset (city listing)",
    "water": "Unknown",
    "wasteBags": "Available",
    "fieldVerified": true,
    "verificationMethod": "Visited in person by Deb and Sunnie",
    "source": "FreeDogParks field notes",
    "fieldTestTrip": "Western Adventure 2026",
    "name": "Detroit Lakes Dog Park",
    "lat": 46.81664,
    "lng": -95.83165,
    "state": "Minnesota",
    "parkType": "Public Dog Park",
    "lastVerified": "October 2, 2026",
    "coordinateSource": "Mapped park or address location; exact entrance pin not field verified",
    "location": "1023 10th Ave SE, Detroit Lakes, Minnesota",
    "parking": "Roadside parking; traveler reports room for vehicles up to semi size.",
    "info": "Separate small/large areas; small dogs under 25 lb. Double- and single-gate entrances. Wheelchair accessible. Pavilion with picnic tables, porta-potty, poop bags and trash bins. Great cell service. No toys/agility. No observed fence gaps. Very well maintained; visitor felt safe.",
    "photos": []
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fenced": true,
    "lighted": false,
    "separated": true,
    "rv": true,
    "parkingVanClassB": "Verified",
    "parkingClassC": "Verified",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Verified",
    "hours": "Unknown",
    "water": "None observed",
    "wasteBags": "Available",
    "fieldVerified": true,
    "verificationMethod": "Visited in person by Deb and Sunnie",
    "source": "FreeDogParks field notes",
    "fieldTestTrip": "Western Adventure 2026",
    "name": "Breckenridge Dog Park",
    "lat": 46.26834,
    "lng": -96.587,
    "state": "Minnesota",
    "parkType": "Public Dog Park",
    "lastVerified": "October 2, 2026",
    "coordinateSource": "Mapped park or address location; exact entrance pin not field verified",
    "location": "504 Beede Ave, Breckenridge, Minnesota",
    "parking": "Side-street parking; traveler reports room for vehicles up to semi size.",
    "info": "Double-gated; wheelchair accessible. Some shade, grass and concrete. Good cell service. No restroom, toys or agility equipment. Well kept with running room; visitor felt safe. Small trash cans are for dog-waste bags only. Visit photo confirms a designated small dog area for dogs under 30 pounds.",
    "warning": "A gap between fences was observed; its purpose was not confirmed. Check containment before letting your dog off leash.",
    "photos": [
      {
        "src": "photos/breckenridge-fence.jpg",
        "alt": "Fenced play area"
      },
      {
        "src": "photos/breckenridge-small-dogs.jpg",
        "alt": "Posted small dog area: under 30 pounds"
      },
      {
        "src": "photos/breckenridge-seating.jpg",
        "alt": "Picnic table and shade"
      }
    ]
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fenced": true,
    "lighted": true,
    "separated": false,
    "rv": true,
    "parkingVanClassB": "Verified",
    "parkingClassC": "Verified",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Verified",
    "hours": "Unknown",
    "water": "Bowls available; no water supply observed",
    "wasteBags": "Available",
    "fieldVerified": true,
    "verificationMethod": "Visited in person by Deb and Sunnie",
    "source": "FreeDogParks field notes",
    "fieldTestTrip": "Western Adventure 2026",
    "name": "TA Express Summit Dog Park",
    "lat": 45.311216,
    "lng": -97.046297,
    "state": "South Dakota",
    "parkType": "Travel Stop Dog Park",
    "lastVerified": "October 3, 2026",
    "coordinateSource": "Mapped park or address location; exact entrance pin not field verified",
    "location": "45789 US Hwy 12, Summit, South Dakota",
    "parking": "Travel-center parking up to semi size.",
    "info": "Double-gated; shared area without size separation. Wheelchair accessible. Good cell service. No seating inside, shade, toys or agility. Poop bags and trash can; restrooms in travel center.",
    "warning": "Fence repairs needed at the October 3 visit. Visitor considered the enclosure safe only once repaired; inspect before off-leash use.",
    "accessNote": "Some lighting observed. Pin marks travel-center address, not dog-park gate.",
    "photos": [
      {
        "src": "photos/summit-overview.jpg",
        "alt": "Fenced pet area"
      },
      {
        "src": "photos/summit-sign.jpg",
        "alt": "Coffee Cup Bark Park sign at the Summit stop"
      }
    ]
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fenced": true,
    "lighted": false,
    "separated": false,
    "rv": true,
    "parkingVanClassB": "Verified",
    "parkingClassC": "Verified",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Verified",
    "hours": "Unknown",
    "water": "Fixture and bowl visible in visit photo; operation not verified",
    "wasteBags": "Dispenser and trash bin visible",
    "fieldVerified": true,
    "verificationMethod": "Visited in person by Deb and Sunnie",
    "source": "FreeDogParks field notes",
    "fieldTestTrip": "Western Adventure 2026",
    "name": "Watertown Dog Park",
    "lat": 44.91294,
    "lng": -97.10169,
    "state": "South Dakota",
    "parkType": "Public Dog Park",
    "lastVerified": "October 3, 2026",
    "coordinateSource": "Mapped park or address location; exact entrance pin not field verified",
    "location": "10th Ave NE, Watertown, South Dakota",
    "parking": "Parking up to semi size reported; residential neighborhood setting.",
    "info": "Separate fenced areas, but no small/large designation observed. Not wheelchair accessible. Good cell service. No observed fence gaps. Mostly grass; well maintained; visitor felt safe. Porta-potty available. Ramp equipment, picnic seating and shade visible in visit photos.",
    "accessNote": "Multiple areas are present, but size separation was not verified during this visit.",
    "photos": [
      {
        "src": "photos/watertown-overview.jpg",
        "alt": "Grass play area and picnic seating"
      },
      {
        "src": "photos/watertown-water.jpg",
        "alt": "Water fixture and bowl; operation not verified"
      },
      {
        "src": "photos/watertown-equipment.jpg",
        "alt": "Ramp, seating and shade"
      },
      {
        "src": "photos/watertown-gate.jpg",
        "alt": "Entrance with waste station"
      }
    ]
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": false,
    "fenced": false,
    "lighted": null,
    "separated": false,
    "rv": true,
    "parkingVanClassB": "Verified",
    "parkingClassC": "Verified",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Unknown",
    "hours": "Unknown",
    "water": "Unknown",
    "wasteBags": "Unknown",
    "fieldVerified": true,
    "verificationMethod": "Visited in person by Deb and Sunnie",
    "source": "FreeDogParks field notes",
    "fieldTestTrip": "Western Adventure 2026",
    "name": "Chamberlain Scenic Pet Stop — Dignity",
    "lat": 43.786953,
    "lng": -99.338234,
    "state": "South Dakota",
    "parkType": "Scenic Leashed Pet Stop",
    "lastVerified": "October 3, 2026",
    "coordinateSource": "Mapped park or address location; exact entrance pin not field verified",
    "location": "Dignity of Earth and Sky rest area, Chamberlain, South Dakota",
    "parking": "Visitor confirmed cars, Class B and Class C.",
    "info": "Scenic view praised by visitor. Unfenced pet stretch stop with limited amenities; not an enclosed dog park. Sunnie picked up burrs.",
    "warning": "Unfenced; keep dogs leashed. Burrs observed.",
    "accessNote": "Pin marks the Dignity landmark grounds, not a verified pet-area entrance.",
    "photos": [
      {
        "src": "photos/chamberlain-overlook.jpg",
        "alt": "Scenic overlook and walking path"
      }
    ]
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fenced": true,
    "lighted": false,
    "separated": false,
    "rv": true,
    "parkingVanClassB": "Verified",
    "parkingClassC": "Verified",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Verified",
    "hours": "Unknown",
    "water": "Spigot working October 7, 2026; bowls available. Sign locates winter water on west side.",
    "wasteBags": "Available; trash receptacles present",
    "fieldVerified": true,
    "verificationMethod": "Visited in person by Deb and Sunnie",
    "source": "FreeDogParks field notes",
    "fieldTestTrip": "Western Adventure 2026",
    "name": "Lake McKenzie Dog Park",
    "lat": 42.86945,
    "lng": -106.295671,
    "state": "Wyoming",
    "parkType": "Public Dog Park",
    "lastVerified": "October 7, 2026",
    "coordinateSource": "Mapped park or address location; exact entrance pin not field verified",
    "location": "1691 Bryan Stock Trail, Casper, Wyoming",
    "parking": "South lot: cars, Class B and Class C. North lot: vehicles up to semi size. Continue along gravel road for north lot.",
    "info": "Two double-gated parking-lot entrances plus a lakeside entrance; lakeside gate configuration not confirmed. No size separation. Wheelchair accessible with paved walking path. Sand/stone surface. Good cell service; no noticeable fence gaps. Good cleanliness and maintenance; visitor felt safe in the play area. Benches, tree shade and covered seating shelter. Porta-potty at north entrance. No toys/agility. Deb said this may be her favorite park yet.",
    "warning": "Cyanobacteria hazard sign posted by the lake: blooms are known to occur. This records a posted warning, not confirmation of an active bloom. Check current lake advisories at WyoHCBs.org.",
    "accessNote": "From Bryan Stock Trail, turn into the access road before the Google Maps arrival point reported during our visit. First lot is the south entrance; continue on gravel road to north entrance. Pin is an address location, not a corrected entrance pin.",
    "photos": [
      {
        "src": "photos/mckenzie-overview.jpg",
        "alt": "Open play area and covered seating"
      },
      {
        "src": "photos/mckenzie-path.jpg",
        "alt": "Paved walking path"
      },
      {
        "src": "photos/mckenzie-gate.jpg",
        "alt": "Entrance and lakeside surroundings"
      },
      {
        "src": "photos/mckenzie-water.jpg",
        "alt": "Water spigot and bowl"
      },
      {
        "src": "photos/mckenzie-warning.jpg",
        "alt": "Posted lake cyanobacteria warning"
      }
    ]
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fenced": true,
    "lighted": false,
    "separated": false,
    "rv": true,
    "parkingVanClassB": "Verified",
    "parkingClassC": "Verified",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Unknown",
    "hours": "Unknown",
    "water": "None observed at dog park",
    "wasteBags": "Available; trash can visible",
    "fieldVerified": true,
    "verificationMethod": "Visited in person by Deb and Sunnie",
    "source": "FreeDogParks field notes",
    "fieldTestTrip": "Western Adventure 2026",
    "name": "Dylan’s Dog Park",
    "lat": 42.845447,
    "lng": -106.348478,
    "state": "Wyoming",
    "parkType": "Public Dog Park",
    "lastVerified": "October 7, 2026",
    "coordinateSource": "Mapped park or address location; exact entrance pin not field verified",
    "location": "Tate Pumphouse, 1775 W First Street, Casper, Wyoming",
    "parking": "Cars, Class B and SMALL Class C verified; larger rigs not verified.",
    "info": "Small, fully fenced park with double-gated entry and no size separation. Wheelchair accessible; paved path, gravel and grass. One bench in shade. Cell service available. Visitor felt safe but found maintenance poor. No water or bathrooms observed at the dog park. Operator separately lists restrooms at Tate Pumphouse; access was not field checked.",
    "accessNote": "On entering the park parking area, take an immediate right. Dog park is at the end of the parking lot. Pin marks the Pumphouse address; follow these directions to the dog park.",
    "visitorRating": 2,
    "photos": [
      {
        "src": "photos/dylans-overview.jpg",
        "alt": "Paved path and shaded bench"
      },
      {
        "src": "photos/dylans-gate.jpg",
        "alt": "Double-gated entrance"
      },
      {
        "src": "photos/dylans-rules.jpg",
        "alt": "Park name and posted rules"
      },
      {
        "src": "photos/dylans-bags.jpg",
        "alt": "Waste bag dispenser"
      }
    ]
  }
];
for (const visit of visits) {
 const existing = parks.find(p => p.name === visit.name);
 if (existing) Object.assign(existing, visit); else parks.push(visit);
}
})();

// Earlier field-visit photo galleries, added October 7, 2026.
(() => {
const galleries = {
  "Iron King Dog Park": [
    {
      "src": "photos/ironwood-visit-01.jpg",
      "alt": "Park name and history sign"
    },
    {
      "src": "photos/ironwood-visit-02.jpg",
      "alt": "Entrance and roadside parking"
    },
    {
      "src": "photos/ironwood-visit-03.jpg",
      "alt": "Roadside parking approach"
    },
    {
      "src": "photos/ironwood-visit-04.jpg",
      "alt": "Posted park rules"
    },
    {
      "src": "photos/ironwood-visit-05.jpg",
      "alt": "Shaded play area"
    },
    {
      "src": "photos/ironwood-visit-06.jpg",
      "alt": "Waste bag station"
    },
    {
      "src": "photos/ironwood-visit-07.jpg",
      "alt": "Open play area"
    },
    {
      "src": "photos/ironwood-visit-08.jpg",
      "alt": "Gated entrance"
    }
  ],
  "Ashland Dog Park": [
    {
      "src": "photos/ashland-visit-01.jpg",
      "alt": "Grass and dirt play area"
    },
    {
      "src": "photos/ashland-visit-02.jpg",
      "alt": "Water containers and waste station"
    },
    {
      "src": "photos/ashland-visit-03.jpg",
      "alt": "Access road approaching the park"
    },
    {
      "src": "photos/ashland-visit-04.jpg",
      "alt": "Double-gated entrance"
    }
  ],
  "Superior Dog Park": [
    {
      "src": "photos/superior-visit-01.jpg",
      "alt": "Double-gated entrance and posted rules"
    },
    {
      "src": "photos/superior-visit-02.jpg",
      "alt": "Parking area with Liberty"
    },
    {
      "src": "photos/superior-visit-03.jpg",
      "alt": "Shaded fenced play area"
    },
    {
      "src": "photos/superior-visit-04.jpg",
      "alt": "Parking spaces beside the entrance"
    },
    {
      "src": "photos/superior-visit-05.jpg",
      "alt": "Superior Dog Park rules"
    },
    {
      "src": "photos/superior-visit-06.jpg",
      "alt": "Picnic seating and water bowl"
    },
    {
      "src": "photos/superior-visit-07.jpg",
      "alt": "Trees and open play space"
    },
    {
      "src": "photos/superior-visit-08.jpg",
      "alt": "Water filler at the entrance"
    }
  ],
  "Detroit Lakes Dog Park": [
    {
      "src": "photos/detroit-lakes-visit-01.jpg",
      "alt": "Grass play area"
    },
    {
      "src": "photos/detroit-lakes-visit-02.jpg",
      "alt": "Water fixture beside the entrance"
    },
    {
      "src": "photos/detroit-lakes-visit-03.jpg",
      "alt": "Water fixture and dog bowl; operation not verified"
    },
    {
      "src": "photos/detroit-lakes-visit-04.jpg",
      "alt": "Posted dog park rules"
    },
    {
      "src": "photos/detroit-lakes-visit-05.jpg",
      "alt": "Detroit Lakes Dog Park sign"
    }
  ]
};
for (const [name, photos] of Object.entries(galleries)) {
 const park = parks.find(p => p.name === name);
 if (park) park.photos = photos;
}
})();

// Western Adventure October 2026 — verified field-inspection notes.
// Paste this entire block at the END of parks.js, after the existing closing code.
// Existing parks and photo galleries are preserved; record names are de-duplicated.
// Entries without verified coordinates are held in pendingParkLocations, not shown as inaccurate map pins.
(() => {
const inspections = [
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fieldVerified": true,
    "verificationMethod": "Field inspection by Deb and Sunnie",
    "source": "Free Dog Parks field inspection",
    "fieldTestTrip": "Western Adventure 2026",
    "lastVerified": "October 2026",
    "parkType": "Public Dog Park",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Unknown",
    "parkingClassC": "Unknown",
    "parkingVanClassB": "Unknown",
    "lighted": false,
    "water": "No water observed",
    "wasteBags": "Poop bags and trash available",
    "hours": "Unknown",
    "rv": true,
    "name": "Darcy's Place",
    "state": "Wyoming",
    "lat": null,
    "lng": null,
    "coordinateSource": "Exact dog park position pending verification",
    "visitorRating": 3,
    "location": "Wyoming — precise park and parking location not verified",
    "fenced": true,
    "separated": false,
    "parking": "Dog area about 500 feet from parking; semi roadside parking uncertain",
    "info": "Free • Fully fenced with no observed gaps • Single shared dog area • Mulch surface • No lights, water, restrooms, or shaded seating • Good cell service • Gravel approach may be difficult for wheelchair users • Dogs must remain leashed until reaching the dog park.",
    "warning": "Google Maps directions were inaccurate during field visit; exact entrance pin required before publishing map location.",
    "fieldTestPriority": "LOCATION VERIFICATION NEEDED",
    "photos": []
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fieldVerified": true,
    "verificationMethod": "Field inspection by Deb and Sunnie",
    "source": "Free Dog Parks field inspection",
    "fieldTestTrip": "Western Adventure 2026",
    "lastVerified": "October 2026",
    "parkType": "Public Dog Park",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Verified (roadside only)",
    "parkingClassC": "Unknown",
    "parkingVanClassB": "Verified",
    "lighted": false,
    "water": "Big dog area: water available; small dog area: none",
    "wasteBags": "Available; trash cans in both areas",
    "hours": "Unknown",
    "rv": true,
    "name": "Dubois Dog Park (name to verify)",
    "state": "Wyoming",
    "lat": null,
    "lng": null,
    "coordinateSource": "Exact dog park position pending verification",
    "visitorRating": 3.5,
    "location": "Dubois, Wyoming; exact entrance pin pending",
    "nameVerification": "Official posted park name not confirmed",
    "fenced": true,
    "separated": true,
    "parking": "Designated lot accommodates Class B; roadside parking reported up to semi; short walk uphill",
    "info": "Free • Separate areas but no clear small/large size signs • Gravel/natural surfaces, large side; gravel small side • Big side has water, poop bags, trash, and some toys • Small side has poop bags and trash but no water • Good cell service • No restrooms or shade • Well maintained and safe • Wheelchair access to dog areas reported, but outside water feature is not wheelchair accessible.",
    "fieldTestPriority": "LOCATION VERIFICATION NEEDED",
    "photos": []
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fieldVerified": true,
    "verificationMethod": "Field inspection by Deb and Sunnie",
    "source": "Free Dog Parks field inspection",
    "fieldTestTrip": "Western Adventure 2026",
    "lastVerified": "October 2026",
    "parkType": "Public Dog Park",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Unknown",
    "parkingClassC": "Unknown",
    "parkingVanClassB": "Unknown",
    "lighted": null,
    "water": "Not verified",
    "wasteBags": "Available",
    "hours": "Unknown",
    "rv": true,
    "name": "Moja Campbell Dog Park",
    "state": "Montana",
    "lat": null,
    "lng": null,
    "coordinateSource": "Exact dog park position pending verification",
    "visitorRating": 4.5,
    "location": "Mayor’s Landing, 97 View Vista Dr, Livingston, Montana",
    "fenced": false,
    "separated": false,
    "parking": "Residential street approach; room for larger vehicles at the destination but approach is restrictive",
    "info": "Free • Partially fenced off-leash area • No separate size zones • Poop bags, trash cans, seating, shade, nearby restroom/porta-potty • Mixed surface • Good maintenance • Safe • Excellent cell signal • Residential access route.",
    "fieldTestPriority": "LOCATION VERIFICATION NEEDED",
    "photos": []
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fieldVerified": true,
    "verificationMethod": "Field inspection by Deb and Sunnie",
    "source": "Free Dog Parks field inspection",
    "fieldTestTrip": "Western Adventure 2026",
    "lastVerified": "October 2026",
    "parkType": "Public Dog Park",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Unknown",
    "parkingClassC": "Verified",
    "parkingVanClassB": "Verified",
    "lighted": null,
    "water": "No drinking water",
    "wasteBags": "Available",
    "hours": "Unknown",
    "rv": true,
    "name": "Gallatin Dog Park",
    "state": "Montana",
    "lat": null,
    "lng": null,
    "coordinateSource": "Exact dog park position pending verification",
    "visitorRating": 4.8,
    "location": "Bozeman, Montana — exact identity/location pending review",
    "fenced": true,
    "separated": true,
    "parking": "Limited dedicated parking up to Class C; at entrance",
    "info": "Excellent maintenance • Separate fenced play areas • Poop bags and trash bins • No fresh water • No restroom noted • Wheelchair accessible • Excellent cell signal. The Gallatin/Anderson naming must be reconciled before mapping.",
    "fieldTestPriority": "NAME AND LOCATION VERIFICATION NEEDED",
    "photos": []
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fieldVerified": true,
    "verificationMethod": "Field inspection by Deb and Sunnie",
    "source": "Free Dog Parks field inspection",
    "fieldTestTrip": "Western Adventure 2026",
    "lastVerified": "October 2026",
    "parkType": "Public Dog Park",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Unknown",
    "parkingClassC": "Unknown",
    "parkingVanClassB": "Unknown",
    "lighted": null,
    "water": "No drinking water",
    "wasteBags": "Available",
    "hours": "Unknown",
    "rv": null,
    "name": "Anderson Dog Park",
    "state": "Montana",
    "lat": null,
    "lng": null,
    "coordinateSource": "Exact dog park position pending verification",
    "visitorRating": 4.8,
    "location": "Gallatin County Regional Park, Bozeman, Montana; confirm whether identical to Gallatin inspection",
    "fenced": true,
    "separated": true,
    "info": "Field inspection rating 4.8/5 • Separately fenced play areas • Poop bags and trash available • No fresh drinking water. Check overlap with Gallatin Dog Park inspection before publishing as a separate pin.",
    "fieldTestPriority": "DUPLICATE REVIEW NEEDED",
    "photos": []
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fieldVerified": true,
    "verificationMethod": "Field inspection by Deb and Sunnie",
    "source": "Free Dog Parks field inspection",
    "fieldTestTrip": "Western Adventure 2026",
    "lastVerified": "October 2026",
    "parkType": "Public Dog Park",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Unknown",
    "parkingClassC": "Verified",
    "parkingVanClassB": "Verified",
    "lighted": null,
    "water": "Available; winter shutoff suspected, not confirmed",
    "wasteBags": "Unknown",
    "hours": "Unknown",
    "rv": true,
    "name": "Hugh Rogers WAG Dog Park",
    "state": "Montana",
    "lat": null,
    "lng": null,
    "coordinateSource": "Exact dog park position pending verification",
    "visitorRating": 5,
    "location": "Whitefish, Montana; park entrance pin pending",
    "fenced": true,
    "separated": null,
    "parking": "Dedicated lot; limited parking up to Class C; access through residential streets",
    "info": "Public dog park • Excellent maintenance • Safe and recommended • Wheelchair accessible, entrance beside parking • Good cell service • No restroom inside dog park; restroom at adjacent public park a short walk from south entrance • Small/large separation not verified.",
    "seasonalClosure": "Wednesday morning maintenance closure (exact hours not verified)",
    "fieldTestPriority": "LOCATION VERIFICATION NEEDED",
    "photos": []
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fieldVerified": true,
    "verificationMethod": "Field inspection by Deb and Sunnie",
    "source": "Free Dog Parks field inspection",
    "fieldTestTrip": "Western Adventure 2026",
    "lastVerified": "October 2026",
    "parkType": "Public Dog Park",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Unknown",
    "parkingClassC": "Verified",
    "parkingVanClassB": "Verified",
    "lighted": null,
    "water": "Working drinking water and bowls on October 15",
    "wasteBags": "Available; trash cans present",
    "hours": "6:00 AM–10:00 PM (posted rules)",
    "rv": true,
    "name": "Cherry Hill Dog Park",
    "state": "Idaho",
    "lat": 47.7,
    "lng": -116.77,
    "coordinateSource": "Approximate area only — exact entrance pin not field verified",
    "visitorRating": 4.5,
    "location": "Cherry Hill Park, Coeur d’Alene, Idaho",
    "fenced": true,
    "separated": true,
    "parking": "Dedicated lot, plenty of space; accommodates Class C; fifth wheel may fit depending on available spaces",
    "info": "Public park • Free fully fenced dog areas • No fence gaps • Separate small/large dog sections but NO posted weight limit observed • Double gates • Gravel in both areas • Working water and bowls • Poop bags, trash cans, benches, shade • Restroom at south parking entrance • Wheelchair accessible, at parking area • Excellent cell signal • Excellent maintenance • Safe and recommended.",
    "coordinatePrecision": "Approximate neighborhood pin; exact gate coordinate needs field verification",
    "accessNote": "APPROXIMATE MAP PIN ONLY: follow the named public park and posted dog-park signs; precise entrance coordinate is not verified.",
    "photos": []
  },
  {
    "status": "free",
    "statusLabel": "🟢 FIELD VERIFIED FREE",
    "offleash": true,
    "fieldVerified": true,
    "verificationMethod": "Field inspection by Deb and Sunnie",
    "source": "Free Dog Parks field inspection",
    "fieldTestTrip": "Western Adventure 2026",
    "lastVerified": "October 2026",
    "parkType": "Public Dog Park",
    "parkingClassA": "Unknown",
    "parkingPullBehind": "Unknown",
    "parkingSemi": "Verified",
    "parkingClassC": "Verified",
    "parkingVanClassB": "Verified",
    "lighted": null,
    "water": "Under-30-lb area: trickle only; over-30-lb area: not working; separate rinse area: working",
    "wasteBags": "Available; trash cans present",
    "hours": "Public park: Apr 15–Oct 15 6 AM–9 PM; Oct 16–Apr 14 6 AM–7 PM (sign)",
    "rv": true,
    "name": "Valley Mission Dog Park",
    "state": "Washington",
    "lat": 47.673,
    "lng": -117.24,
    "coordinateSource": "Approximate area only — exact entrance pin not field verified",
    "visitorRating": 4,
    "location": "Valley Mission Park & Pool, Spokane Valley, Washington",
    "fenced": true,
    "separated": true,
    "parking": "Dedicated lot with plentiful spaces, up to semi size; short walk to gate",
    "warning": "October 15, 2026 drinking water advisory: Under-30-lb side barely flowing, over-30-lb side not working. Bring drinking water; rinse station was working.",
    "info": "Within public park • Free fully fenced • No fence gaps • Double-gated sections for under/over 30 lb • Gravel • Poop bags and bins • Water bowls • Benches, shade, picnic tables • Several agility obstacles on large-dog side • Separate rinse area • Public restrooms nearby • Wheelchair accessible after short walk • Excellent cell service • Good maintenance • Safe, recommended.",
    "coordinatePrecision": "Approximate city-area pin, not a field-verified entrance pin",
    "accessNote": "APPROXIMATE MAP PIN ONLY: use the Valley Mission Park entrance and posted dog-park signs; precise gate coordinate is not verified.",
    "photos": []
  }
];
const pendingParkLocations = [];
for (const item of inspections) {
  const existing = parks.find(p => p.name.toLowerCase() === item.name.toLowerCase());
  if (existing) {
    // Do not accidentally erase established coordinates or existing photo galleries.
    const savedPhotos = existing.photos;
    const savedLat = existing.lat, savedLng = existing.lng;
    Object.assign(existing, item);
    if (Array.isArray(savedPhotos) && savedPhotos.length) existing.photos = savedPhotos;
    if (Number.isFinite(savedLat) && Number.isFinite(savedLng)) { existing.lat=savedLat; existing.lng=savedLng; }
  } else if (Number.isFinite(item.lat) && Number.isFinite(item.lng)) {
    parks.push(item);
  } else {
    pendingParkLocations.push(item);
  }
}
// Inspect pendingParkLocations while reconciling remaining map coordinates.
if (typeof window !== "undefined") window.pendingParkLocations = pendingParkLocations;
})();


// Photo galleries selected from October 15 field inspection uploads.
(() => {
  const galleries = {
    "Cherry Hill Dog Park": [
      { src: "photos/cherry-hill-overview.jpg", alt: "Cherry Hill dog play area" },
      { src: "photos/cherry-hill-entrance.jpg", alt: "Separate fenced dog enclosure and entrance" },
      { src: "photos/cherry-hill-rules.jpg", alt: "Posted Cherry Hill park rules" }
    ],
    "Valley Mission Dog Park": [
      { src: "photos/valley-mission-overview.jpg", alt: "Gravel dog play area and agility obstacles" },
      { src: "photos/valley-mission-park.jpg", alt: "Valley Mission public park and parking area" },
      { src: "photos/valley-mission-hours.jpg", alt: "Posted seasonal public park hours" }
    ]
  };
  for (const [name, gallery] of Object.entries(galleries)) {
    const park = parks.find(p => p.name === name);
    if (park) park.photos = gallery;
  }
})();


// October 16, 2026: Benton Dog Park — preserve mapped coordinates and original source metadata.
(() => {
  const park = parks.find(p => p.name === 'Benton Dog Park');
  if (!park) return;
  Object.assign(park, {
    status: 'free', statusLabel: '🟢 FIELD VERIFIED FREE',
    fieldVerified: true, verificationMethod: 'Visited in person by Deb and Sunnie',
    fieldTestTrip: 'Western Adventure 2026', lastVerified: 'October 16, 2026',
    offleash: true, fenced: true, separated: true, lighted: true,
    rv: true, parkingVanClassB: 'Verified', parkingClassC: 'Verified',
    parkingClassA: 'Unknown', parkingPullBehind: 'Unknown', parkingSemi: 'Verified',
    water: 'Fresh drinking water available; bowls verified',
    wasteBags: 'Poop bags and trash cans verified',
    parking: 'Dedicated lot, plenty of spaces, room for semi; at parking area',
    visitorRating: 4.5,
    info: 'FREE • Fully fenced • Separate small/large areas • Double-gated • Safe • Mixed surface • Poop bags and trash • Fresh drinking water and bowls • Benches • Shade • LIGHTED • NO RESTROOM facilities • Wheelchair accessible, dog park at parking area • Excellent cell service • Good maintenance • Field inspector recommends.'
  });
})();

// October 21, 2026 — Las Vegas field inspections; image uploads pending.
(() => {
const visits = [{"name":"Sunset Dog Park","lat":36.061,"lng":-115.111,"location":"Sunset Park, Las Vegas, Nevada","separated":true,"lighted":true,"rv":true,"parkingClassA":"Verified","parkingSemi":"Unknown","parking":"Shared public park lot; limited spaces; Class A RV accommodated; entrance at parking area","hours":"6:00 AM - 11:00 PM","water":"Fresh drinking water verified","wasteBags":"Poop bags and trash cans verified","visitorRating":4.7,"maintenance":"Excellent","recommendation":"Yes","verifiedAmenities":["Poop bags","Trash cans","Fresh drinking water","Benches","Shade","Lighting","Picnic tables","Restrooms"],"info":"FREE • Fully fenced, separate small/large dog areas, safe, double-gated • Mixed ground surface • Wheelchair accessible • Excellent cell service • Excellent maintenance • 4.7/5; recommended.","accessNote":"Map marker is approximate; dog park entrance/parking pin not independently verified.","photoStatus":"6 inspection photos received, not yet uploaded to website"},{"name":"The Paw Park at Fashion Show Mall","lat":36.1291,"lng":-115.1705,"location":"Fashion Show Mall, 3200 S Las Vegas Blvd, Las Vegas, NV","separated":false,"lighted":null,"rv":null,"parking":"Parking around mall as available; limited spaces; parking location, largest vehicle and walking distance unverified","hours":"Unknown","water":"Unknown","wasteBags":"Poop bag dispenser present but empty; trash cans verified","visitorRating":3,"maintenance":"Fair","recommendation":"Maybe","verifiedAmenities":["Poop bag dispenser (empty)","Trash cans","Shade"],"info":"FREE • Fully fenced, off-leash, double-gated, safe • No small/large dog separation • Mixed surface • Wheelchair accessible • Excellent cell service • Fair maintenance • 3.0/5; maybe recommended.","accessNote":"Mall dogs must be leashed outside the designated off-leash park. Map marker approximate; RV parking not verified.","photoStatus":"3 inspection photos received, not yet uploaded to website"},{"name":"Dog Fancier's Park","lat":36.109,"lng":-115.048,"location":"5800 E Flamingo Rd, Las Vegas, NV","separated":true,"lighted":true,"rv":true,"parkingSemi":"Verified","parking":"Dedicated dog park lot; plenty of spaces, accommodates semi/large truck; entrance at parking area","hours":"6:00 AM - 11:00 PM","water":"Water infrastructure present but water did not seem on; functional drinking water unverified","wasteBags":"Poop bags and trash cans verified","visitorRating":2.5,"maintenance":"Fair","recommendation":"Maybe","verifiedAmenities":["Poop bags","Trash cans","Benches","Lighting","Restrooms / porta potty"],"info":"FREE • Fully fenced, safe, double-gated • Posted small/large areas, but visitors do not consistently follow size restrictions • Mixed surface • Wheelchair accessible • Excellent cell service • Fair maintenance • 2.5/5; maybe recommended.","accessNote":"Seasonal: 5A small dogs ≤35 lb May–Feb, closed Mar–Apr; 5B large dogs >35 lb May–Feb, closed Mar–Apr; Area 4 all dogs Mar–Oct, closed Nov–Feb; Area 1A all dogs Jul–Feb, small dogs Mar–Apr, closed May–Jun; Area 1B all dogs Jul–Feb, large dogs Mar–Apr, closed May–Jun. Follow on-site signs. Map marker approximate.","photoStatus":"11 inspection photos received, not yet uploaded to website"}];
for (const p of visits) {
  if (parks.some(x => x.name.toLowerCase() === p.name.toLowerCase())) continue;
  parks.push({...p,parkType:'Public Dog Park',status:'free',statusLabel:'🟢 FIELD VERIFIED FREE',offleash:true,fenced:true,fieldVerified:true,verificationMethod:'Visited in person by Deb and Sunnie',fieldTestTrip:'Western Adventure 2026',lastVerified:'October 21, 2026',source:'FreeDogParks field inspection',coordinateSource:'Approximate park-area coordinates; entrance pin not field verified',parkingVanClassB:p.rv?'Verified':'Unknown',parkingClassC:p.rv?'Likely suitable; not individually verified':'Unknown',parkingPullBehind:'Unknown',wheelchairAccessible:true,cellService:'Excellent',doubleGated:true,safe:true,surface:'Mixed',amenitiesUnverifiedPolicy:'Amenities not explicitly verified are unknown, not absent',photos:[]});
}
})();

// October 22, 2026 — Henderson field inspections, approved for publication.
(()=>{
const visits=[{"name":"Acacia Park Dog Park","lat":36.0311,"lng":-115.0169,"coordinateSource":"Approximate public-park coordinate; dog park entrance not field verified","location":"Acacia Park, 50 Casa Del Fuego St, Henderson, NV 89012","sourceUrl":"https://www.cityofhenderson.com/Home/Components/FacilityDirectory/FacilityDirectory/188/771","separated":true,"lighted":true,"rv":true,"parkingVanClassB":"Verified","parkingClassC":"Verified","parkingClassA":"Verified","parkingSemi":"Verified","parking":"Shared public park lot; very limited/limited spaces; up to semi size observed; dog park at parking area","parkingAvailability":"Limited","cellService":"Excellent","hours":"7:00 AM–10:00 PM per inspected dog-park sign with lights; city lists public park 6:00 AM–10:00 PM","water":"Working dog fountain outside large-dog area; water bowls verified","wasteBags":"Dispenser present but EMPTY at inspection; trash cans verified","verifiedAmenities":["Poop bag dispenser (empty)","Trash cans","Working drinking fountain (outside large-dog area)","Water bowls","Benches","Shade","Lighting"],"visitorRating":4.5,"maintenance":"Excellent","recommendation":"Yes","info":"FREE • Fully fenced • Separate small/large areas • Double-gated and safe • Mixed surface • Working dog drinking fountain OUTSIDE large-dog run • Poop bag dispenser EMPTY during inspection • Trash, water bowls, benches, shade, lighting • Wheelchair accessible • Excellent cell service • Excellent maintenance • 4.5/5, recommended.","accessNote":"Dog areas at south end of public park; approximate park-area map pin, not verified entrance. Official city listing notes Wednesday 10–11 AM daytime irrigation closures for dog parks #1 and #2."},{"name":"Bark Park at Heritage Park","lat":36.033699,"lng":-114.953835,"coordinateSource":"Third-party mapped park coordinates, not independently field-verified gate","location":"350 S Racetrack Rd, Henderson, NV 89015","sourceUrl":"https://www.cityofhenderson.com/Home/Components/FacilityDirectory/FacilityDirectory/204/771","separated":true,"lighted":true,"rv":true,"parkingVanClassB":"Verified","parkingClassC":"Verified","parkingClassA":"Verified","parkingSemi":"Verified","parking":"Dedicated dog park lot; plenty of spaces, up to semi/large truck; trailers may have trouble turning around","parkingAvailability":"Plenty","cellService":"Good","hours":"6:00 AM–10:00 PM per city; inspected signs conflict (6 AM vs 7 AM opening)","water":"Working fresh drinking water verified","wasteBags":"Poop bags and trash cans verified","verifiedAmenities":["Poop bags","Trash cans","Working fresh drinking water","Benches","Shade","Lighting","Restrooms","Dog splash pad (closed at visit)"],"visitorRating":5,"maintenance":"Excellent","recommendation":"Yes","info":"FREE • Fully fenced, separate small/large runs, double-gated and safe • Some runs closed for maintenance; other runs open • Mixed surface • Water, bags, trash, benches, shade, lighting, restrooms • Dog splash pad PRESENT but CLOSED at October 22 inspection • Wheelchair accessible • Good cell service • Excellent maintenance • 5/5, recommended.","accessNote":"Semi-size vehicles observed, but trailers may have difficulty turning around. City identifies dog-only hydrant splash pad and people-only paw-shaped splash pad. Official agility course listed by city, not verified during field inspection. Splash pad seasonal hours posted April 1–Oct 31, 9 AM–8 PM; closed at visit. City park hours 6 AM–10 PM; inspection signs differ."},{"name":"Pulse Dog Park","lat":36.06063,"lng":-114.96573,"coordinateSource":"OpenStreetMap dog-park polygon center, not field-verified entrance","location":"Desert Pulse Park, 475 Pulse Avenue, Henderson, NV 89011","sourceUrl":"https://mapcarta.com/W1365441696","separated":true,"lighted":true,"rv":true,"parkingVanClassB":"Verified","parkingClassC":"Verified","parkingClassA":"Unknown","parkingSemi":"Unknown","parking":"Dedicated dog park lot; limited spaces; Class C RV largest verified; short walk to entrance","parkingAvailability":"Limited","cellService":"Fair","hours":"6:00 AM–10:00 PM per inspected sign","water":"Working fresh drinking water; water bowls verified","wasteBags":"Poop bags and trash cans verified","verifiedAmenities":["Poop bags","Trash cans","Working fresh drinking water","Water bowls","Benches","Shade","Lighting","Restrooms / porta potty","Picnic tables outside dog park"],"visitorRating":4,"maintenance":"Excellent","recommendation":"Yes","info":"FREE • Fully fenced with three separate small, large and all-dog runs; all open • Double-gated, safe • Residential setting • Mixed surface • Working drinking water, bowls, bags, trash, benches, shade, lighting, restrooms • Picnic tables OUTSIDE dog runs • Wheelchair accessible • Fair cell service • Excellent maintenance • 4/5, recommended.","accessNote":"Dog park map center from OSM, entrance not independently pinned. Picnic tables are outside dog park."},{"name":"Weston Hills Dog Park","lat":36.07433,"lng":-114.97857,"coordinateSource":"OpenStreetMap dog-park polygon center, not field-verified entrance","location":"Weston Hills Park, 950 Weston Ridge St, Henderson, NV 89011","sourceUrl":"https://www.cityofhenderson.com/Home/Components/FacilityDirectory/FacilityDirectory/323/771","separated":true,"lighted":true,"rv":true,"parkingVanClassB":"Verified","parkingClassC":"Not verified; Class B largest observed","parkingClassA":"Not verified; Class B largest observed","parkingSemi":"Not verified; Class B largest observed","parking":"Shared public park lot; VERY limited spaces; Class B RV largest verified; dog park at parking area","parkingAvailability":"Very limited","cellService":"Fair","hours":"7:00 AM–10:00 PM per inspected dog-park sign with lighting; city lists general park 6 AM–10 PM","water":"Working drinking fountain OUTSIDE dog area","wasteBags":"Poop bags and trash cans verified","verifiedAmenities":["Poop bags","Trash cans","Working drinking fountain outside dog run","Shade","Covered seating outside dog run","Lighting"],"visitorRating":3.5,"maintenance":"Good","recommendation":"Maybe","info":"FREE • Fully fenced, double-gated, safe • Residential neighborhood • Separate small and large dog areas reported; ALL DOG sign photographed but number of separate runs unknown • Mixed surface • Bags, trash, shade, lighting • Working fountain and covered seating OUTSIDE dog area • Wheelchair accessible • Fair cell service • Good maintenance • 3.5/5, maybe recommended.","accessNote":"Very limited parking; Class B RV largest verified, larger RV suitability unverified. City lists general park hours 6 AM–10 PM, inspected dog-park sign says 7 AM–10 PM with lights."}];
for(const visit of visits){
 const existing=parks.find(p=>p.name.toLowerCase()===visit.name.toLowerCase() || (visit.name==='Pulse Dog Park' && /desert pulse|pulse dog park/i.test(p.name)) || (visit.name==='Acacia Park Dog Park' && /acacia park/i.test(p.name)) || (visit.name==='Bark Park at Heritage Park' && /heritage bark|bark park at heritage/i.test(p.name)) || (visit.name==='Weston Hills Dog Park' && /weston hills/i.test(p.name)));
 if(existing){const coords=Number.isFinite(existing.lat)&&Number.isFinite(existing.lng)?{lat:existing.lat,lng:existing.lng}:{};const photos=Array.isArray(existing.photos)&&existing.photos.length?existing.photos:null;Object.assign(existing,{"parkType":"Public Dog Park","status":"free","statusLabel":"🟢 FIELD VERIFIED FREE","offleash":true,"fenced":true,"doubleGated":true,"safe":true,"fieldVerified":true,"verificationMethod":"Visited in person by Deb and Sunnie","fieldTestTrip":"Western Adventure 2026","lastVerified":"October 22, 2026","source":"FreeDogParks field inspection","wheelchairAccessible":true,"surface":"Mixed","amenitiesUnverifiedPolicy":"Unlisted amenities unknown, not absent","photos":[],"photoStatus":"Inspection photos shared in chat, not yet uploaded to website","parkingPullBehind":"Unknown"},visit,coords);if(photos)existing.photos=photos;}
 else parks.push({...{"parkType":"Public Dog Park","status":"free","statusLabel":"🟢 FIELD VERIFIED FREE","offleash":true,"fenced":true,"doubleGated":true,"safe":true,"fieldVerified":true,"verificationMethod":"Visited in person by Deb and Sunnie","fieldTestTrip":"Western Adventure 2026","lastVerified":"October 22, 2026","source":"FreeDogParks field inspection","wheelchairAccessible":true,"surface":"Mixed","amenitiesUnverifiedPolicy":"Unlisted amenities unknown, not absent","photos":[],"photoStatus":"Inspection photos shared in chat, not yet uploaded to website","parkingPullBehind":"Unknown"},...visit});
}
})();

// October 22: residential-neighborhood classification. Union Village remains a drive-by only.
(() => {
 const weston=parks.find(p=>p.name==='Weston Hills Dog Park');
 if(weston) weston.parkType='Residential Dog Park';
 // No verified entrance coordinate: do not create a potentially misleading map marker.
 const union=parks.find(p=>p.name==='Union Village Park Dog Park');
 if(union) Object.assign(union,{parkType:'Residential Dog Park',fieldVerified:false,inspectionStatus:'Drive-by only — needs full inspection',parking:'Street parking only; very limited spaces',fenced:null,separated:null,offleash:null,lighted:null,rv:null,water:'Unknown',wasteBags:'Unknown',visitorRating:null});
})();

// October 22: clarify neighborhood-scale fenced dog areas (not large destination parks).
(() => {
 const weston=parks.find(p=>p.name==='Weston Hills Dog Park');
 if(weston) Object.assign(weston,{parkType:'Residential Dog Park',status:'free',statusLabel:'🟢 FIELD VERIFIED FREE',fenced:true,offleash:true,neighborhoodScale:true,accessNote:(weston.accessNote||'')+' Neighborhood-scale fenced dog runs in a residential setting, not a large regional park.',info:(weston.info||'')+' Small neighborhood dog-park setting; not a large destination park.'});
 const union=parks.find(p=>p.name==='Union Village Park Dog Park');
 if(union) Object.assign(union,{parkType:'Residential Dog Park',status:'free',statusLabel:'🟡 FREE — PARTIALLY VERIFIED',fenced:true,offleash:true,fieldVerified:false,inspectionStatus:'Drive-by observations only; full inspection pending',neighborhoodScale:true,parking:'Street parking only; very limited spaces',info:'FREE, fully fenced neighborhood-scale dog area in a residential setting. NOT a large public park. Drive-by observations only; amenities, safety, gate configuration and suitability unverified.',accessNote:'Residential street parking is very limited; exact dog-park gate and map coordinates unverified.'});
})();

// Union Village: completed firsthand field inspection, October 22, 2026. No photos.
(() => {
 const record={
 name:'Union Village Residential Dog Park',parkType:'Residential Dog Park',
 location:'1060 Wellness Place, Henderson, NV 89011',address:'1060 Wellness Place, Henderson, NV 89011',
 lat:36.07657,lng:-115.03372,coordinatesSource:'OpenStreetMap dog park way 1308910286 via Mapcarta; approximate mapped park center',
 status:'free',statusLabel:'🟢 FIELD VERIFIED FREE',offleash:true,fenced:true,separated:true,doubleGated:true,safe:true,
 lighted:true,water:'Verified',wasteBags:'Verified',trashCans:true,
 surface:'Mixed',amenitiesVerified:['Poop bags','Trash cans','Fresh drinking water','Lighting'],
 amenitiesUnverifiedPolicy:'All other amenities unknown, not absent',
 parking:'Street parking only — very limited spaces; passenger cars/SUVs only. No RV parking verified.',
 parkingType:'Residential street parking',parkingAvailability:'Very limited',
 largestVehicle:'Passenger car / SUV',rv:'Not suitable',rvParkingSuitable:false,
 wheelchairAccessible:true,distanceFromParking:'Short walk',cellService:'Fair',
 maintenance:'Excellent',rating:3,recommend:false,recommendation:'No',
 recommendationReason:'Not recommended because the fenced dog area is small and street parking is very limited, not because of poor maintenance.',
 neighborhoodScale:true,fieldVerified:true,verificationMethod:'Firsthand field inspection by Deb and Sunnie',
 inspectionStatus:'Completed inspection',lastVerified:'October 22, 2026',
 source:'Free Dog Parks field inspection',sourceUrl:'https://www.cityofhenderson.com/Home/Components/FacilityDirectory/FacilityDirectory/355/771',
 hours:'6:00 AM–10:00 PM (city park hours; check posted dog-area signage)',
 photos:[],photoStatus:'No photos available',
 info:'FREE • Fully fenced residential neighborhood dog area with separate small/large runs and double-gated entry. Excellent maintenance, but SMALL and NOT recommended for travelers because parking is very limited. Street parking for passenger cars/SUVs only; unsuitable for RVs. Verified: poop bags, trash, drinking water, lighting. Other amenities unknown.',
 accessNote:'Neighborhood-scale dog area, NOT a large destination park. Very limited residential street parking; short accessible walk from street to entrance.'
 };
 const existing=parks.find(p=>/union village/i.test(p.name||''));
 if(existing) Object.assign(existing,record); else parks.push(record);
})();


// October 27, 2026 — Dodge City Dog Park firsthand field inspection.
(()=>{
 const existing=parks.find(p=>/wright park dog park/i.test(p.name||''));
 const record={
 name:'Dodge City Dog Park (Wright Park)',parkType:'Public Dog Park',
 lat:37.7473,lng:-100.02291,
 location:'Dodge City, Kansas | PXWG+WR (visitor-provided map plus code)',
 coordinateSource:'Previously geocoded Wright Park dog park position; precise gate not independently verified',
 status:'free',statusLabel:'🟢 FIELD VERIFIED FREE',offleash:true,
 fenced:true,separated:false,doubleGated:true,safe:true,fenceCondition:'No gaps or damage observed',
 dogAreas:'One shared area',smallDogWeightLimit:'Unknown',surface:'Grass',
 lighted:false,water:'Not available',waterWorking:false,waterSeasonalStatus:'Unknown',
 wasteBags:'Verified',trashCans:true,waterBowls:false,benches:true,shade:true,
 picnicTables:false,restrooms:false,restroomNearby:true,restroomLocation:'Nearby in public park',
 toys:false,agilityEquipment:false,dogRinseArea:false,
 amenitiesVerified:['Poop bags','Trash cans','Benches / seating','Shade'],
 amenitiesAbsent:['Fresh drinking water','Water bowls','Picnic tables','Restrooms inside dog area','Lighting','Toys','Agility equipment','Dog rinse area'],
 parking:'Dedicated lot; limited spaces; semi accommodated (visitor verified)',
 parkingType:'Dedicated lot',parkingAvailability:'Limited spaces',
 largestVehicle:'Semi',rv:true,parkingVanClassB:'Verified',wheelchairAccessible:true,
 distanceFromParking:'At entrance',cellService:'Excellent',
 maintenance:'Good',rating:3.5,visitorRating:3.5,recommend:true,
 fieldVerified:true,verificationMethod:'Firsthand field inspection by Deb and Sunnie',
 inspectionStatus:'Completed inspection',lastVerified:'October 27, 2026',
 source:'Free Dog Parks field inspection',
 hours:'Closes at sunset (posted park rules; opening time not verified)',
 photoStatus:'Three field photographs received in ChatGPT; not yet uploaded to website',photos:[],
 constructionNotice:'Construction notice posted at entrance during inspection',
 entrances:2,entranceAccess:'Two entrances: one from the public park and one from the adjacent KOA campground (visitor verified)',
 info:'FREE • Fully fenced, one shared grassy dog area with double-gated entrance. Good maintenance; Sunnie rating 3.5/5, recommended. Poop bags, trash cans, benches and shade. NO drinking water, bowls, lighting, agility equipment or picnic tables. Dedicated parking lot with limited spaces, reportedly accommodates a semi. Wheelchair accessible; entrance at parking. Restrooms nearby in public park. Posted rules say park closes at sunset; construction notice observed.',
 accessNote:'Parking spaces limited even though a semi can fit. Construction notice posted during October 2026 inspection. Two access points: public park entrance and KOA campground entrance. Gate coordinates not separately confirmed.',
 amenitiesUnverifiedPolicy:'Unverified items remain unknown, not absent'
 };
 if(existing) Object.assign(existing,record); else parks.push(record);
})();


/* North Lakes Dog Park — firsthand inspection, October 29, 2026 */
(()=>{
 const record={
 name:'North Lakes Dog Park',parkType:'Public Dog Park',
 lat:33.24585,lng:-97.14572,location:'808 W Windsor Drive, Denton, TX 76201',
 status:'free',statusLabel:'🟢 CONFIRMED FREE',offleash:true,fenced:true,
 separated:true,smallDogLimit:'Under 30 lbs',largeDogLimit:'30 lbs and over',
 dogAreas:4,rotationMaintenance:'One of the large-dog sections is used for rotational maintenance; all four areas may not be open simultaneously',entranceGates:'Double-gated',fenceCondition:'No gaps or damage',
 safeForDogs:true,surface:'Grass',lighted:true,rv:true,
 parkingVanClassB:'Verified',parkingClassC:'Verified',parkingClassA:'Verified',
 parkingPullBehind:'Verified',parkingSemi:'Verified',
 parking:'Dedicated lot; plenty of spaces; semi-truck accommodated (field verified)',
 parkingType:'Dedicated lot',parkingAvailability:'Plenty of spaces',largestVehicle:'Semi',
 wheelchairAccessible:true,distanceFromParking:'Short walk',cellService:'Excellent',
 water:'Working fresh drinking water and water bowls',waterWorking:true,waterSeasonal:'Unknown',
 wasteBags:'Yes',trashCans:true,waterBowls:true,benches:true,shade:true,picnicTables:true,
 restrooms:false,lighting:true,toys:false,agilityEquipment:false,dogRinseArea:false,
 hours:'7:00 AM – 10:00 PM daily; Wednesday 7:00 AM – 3:00 PM maintenance closure (posted)',
 maintenance:'Excellent',rating:4.8,visitorRating:4.8,recommend:true,
 sunniesFavorite:true,ownersFavorite:true,
 fieldVerified:true,verificationMethod:'Firsthand field inspection by Deb and Sunnie',
 inspectionStatus:'Completed inspection',lastVerified:'October 29, 2026',
 source:'Firsthand field inspection; City of Denton',sourceUrl:'https://www.cityofdenton.com/facilities/facility/details/North-Lakes-Dog-Park-1',
 photoStatus:'Four inspection photos supplied in ChatGPT; website image upload pending',photos:[],
 info:'FREE • ⭐ Sunnie’s Favorite 4.8/5 • Four fully fenced grassy areas with small dogs under 30 lbs separated from large dogs 30 lbs and over; one large-dog section is used for rotational maintenance and may be unavailable; double-gated and safe. Working drinking water, bowls, waste bags, trash, seating, shade, picnic tables and lighting. No dog-park restrooms, toys, agility equipment or rinse area. Excellent maintenance. Dedicated parking with plenty of spaces, accommodates semi-trucks. Wheelchair accessible, short walk, excellent cell service. Open 7 AM–10 PM; large-dog area sign indicates Wednesday 7 AM–3 PM maintenance closure.',
 accessNote:'City dog park address 808 W Windsor Dr; parking behind recycling center. Dogs must be at least four months old. Children under 10 prohibited; ages 11–16 require adult supervision. No food or treats in dog play areas.',
 amenitiesUnverifiedPolicy:'Seasonal drinking water status unknown'
 };
 const existing=parks.find(p=>p.name===record.name && /Denton/i.test(p.location||''));
 if(existing)Object.assign(existing,record);else parks.push(record);
})();
