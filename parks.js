const parks = [
// ================================================================================================================
// INDIANA
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
}
    
];
