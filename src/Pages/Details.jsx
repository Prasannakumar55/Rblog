import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
    const [details, setDetails] = useState([
        {
            "id": 1,
            "title": "NTR",
            "Image": "https://variety.com/wp-content/uploads/2022/04/NTR-Jr-RRR.jpg?w=681&h=383&crop=1",
            "category": "Tollywood",
            "description": "In the Oscars Best Actor Predictions list curated by Variety, Jr NTR found a place for his incredible performance in RRR. The Aravinda Sametha actor is listed in the category, 'Unranked Possible Contenders.' With this, Jr NTR became Jr NTR's fans were overjoyed in seeing their favourite actor's name on the list. They took to Twitter to express their joy."
        },
        {
            "id": 51,
            "title": "MAHESH BABU",
            "Image": "https://i0.wp.com/www.dpveu.com/wp-content/uploads/2017/08/mahesh-babu-1-nenokkadine185.jpg?ssl=1",
            "category": "Tollywood",
            "description": "Actor Mahesh Babu's upcoming film, tentatively titled SSMB28, is already in the pre-production stage. Actor Mahesh Babu will soon be seen in filmmaker Trivikram Srinivas' movie tentatively titled SSMB28. The makers of the film on Thursday announced that it will hit screens on April 28, 2023."
        },
        {
            "id": 2,
            "title": " PRABHAS ",
            "Image": "https://media.news9live.com/h-upload/2022/08/15/525114-whatsappimage2022-08-15at15915pm-min.webp",
            "category": "Tollywood",
            "description": "A gang leader tries to keep a promise made to his dying friend and takes on the other criminal gangs. A gang leader tries to keep a promise made to his dying friend and takes on the other criminal gangs.."
        },
        {
            "id": 61,
            "title": "MAD MAX FURRY ROAD",
            "Image": "https://s1.livelib.ru/boocover/1001490462/o/d5e4/George_Miller__Mad_Max_Fury_Road_sbornik.jpeg",
            "category": "footer1",
            "description": " An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life.  run who just might be able to restoset in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order."
        },

        {
            "id": 3,
            "title": "VIJAY DEVARAKONDA",
            "Image": "https://www.klapboardpost.com/wp-content/uploads/2018/04/vijaydeverakonda.jpg",
            "category": "Tollywood",
            "description": "Tollywood superstar Vijay Deverakonda has given powerful performances through the films like Geetha Govindham, Taxiwaala, Mahanati, Arjun Reddy, and Dear Comrade His latter movie Dear Comrade was not only a blockbuster at the box office."
        },
        {
            "id": 4,
            "title": "NAGARJUNA",
            "Image": "https://filmfare.wwmindia.com/content/2022/jun/brahmastra11654934263.jpg",
            "category": "Tollywood",
            "description": "The film directed by Ayan Mukerji shows Nagarjuna in the role of Anish, an artist who holds the power of the Nandi Astra. While his first look was released a few days ago, the trailer has been unveiled today in several languages.."
        },
        {
            "id": 11,
            "title": "Christopher Nolan ",
            "Image": "https://www.looper.com/img/gallery/rules-actors-have-to-follow-in-christopher-nolan-movies/l-intro-1652977075.jpg",
            "category": "Hollywood",
            "description": "While Nolan certainly has brought some great heroes to the big screen, his villain characters might be even more interesting. From those parts of big comic book movies to the more grounded bad guys, these characters add so much to the stories. Here are the most villainous characters in Christopher Nolan's movies."
        },
        {
            "id": 55,
            "title": "INCEPTION ",
            "Image": "https://cdn.mos.cms.futurecdn.net/N9nCdJHgqde57jcyAnd2KL-1200-80.jpg",
            "category": "mix",
            "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
        },
        {
            "id": 12,
            "title": "The Dark Knight",
            "Image": "https://variety.com/wp-content/uploads/2022/03/dark-knight-batman-split.jpg?w=1000",
            "category": "Hollywood",
            "description": "The Joker is a character who appears in Christopher Nolan's 2008 superhero film The Dark Knight, in which he is portrayed by Heath Ledger. Based on the DC Comics supervillain of the same name, the Joker is depicted as a psychopathic criminal mastermind with a warped, sadistic sense of humor.."
        },
        {
            "id": 13,
            "title": "Interstellar ",
            "Image": "https://images.squarespace-cdn.com/content/v1/5a78ab8490badee028bef0e9/1568935524292-TPSLMXHD9HE6PKN02YOG/Interstellar.jpg",
            "category": "Hollywood",
            "description": "Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct. The film's protagonist is Cooper (Matthew McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy. .     "
        },
        {
            "id": 62,
            "title": "Pirates of the Caribbean 5",
            "Image": "https://lumiere-a.akamaihd.net/v1/images/p_piratesofthecaribbean_deadmentellnotales_19642_e89de0a3.jpeg?region=0%2C0%2C540%2C810",
            "category": "footer2",
            "description": "Blacksmith Will Turner teams up with eccentric pirate Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undeadIn a video from the trial shared by Law & Crime Network on their YouTube channel, Amber told the jury, I am harassed, humiliated, threatened, every single day. Even just walking into this courtroom. Sitting here in front of the world, having the worst parts of my life, things that I have lived through, used to humiliate me. People want to kill me and they tell me so every day. People want to put my baby in the microwave, and they tell me that. She also said, I live my life with these sets of rules I've to follow, my friends have to follow for me not to have a panic attack or a triggering event or I ."
        },
        {
            "id": 15,
            "title": "Mad Max: Fury Road ",
            "Image": "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2018/06/furyroad2.jpg",
            "category": "Hollywood",
            "description": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order  ."
        },
        {
            "id": 16,
            "title": "Avatar: The Way of Water ",
            "Image": "https://igimages.gumlet.io/tamil/home/avatar2-2232022m.jpg?w=376&dpr=2.6",
            "category": "Hollywood",
            "description": "Premise. Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
        },
        {
            "id": 21,
            "title": "STARLINK",
            "Image": "https://moniem-tech.com/wp-content/uploads/sites/3/2021/05/1_50c479db-a0f5-4c2d-9e66-5c56d93fa245_1200x.jpg",
            "category": "Technology",
            "description": "Starlink operates on a satellite internet service technology that has existed for decades. Instead of using cable technology, such as fiber optics to transmit internet data, a satellite system uses radio signals through the vacuum of space. Ground stations broadcast signals to satellites in orbits, which in turn relay the data back to the Starlink users on Earth. Each satellite in the Starlink constellation weighs 573 pounds and has a flat body. One SpaceX Falcon 9 rocket can fit up to 60 satellites."
        },
        {
            "id": 56,
            "title": " HYPERLOOP TECHNOLOGY",
            "Image": "https://www.electronicsforu.com/wp-contents/uploads/2018/03/Cutting-edge-Hyperloop-station-proposed-by-RB-Systems-.jpg",
            "category": "mix",
            "description": "A hyperloop, as you may have heard, is a super speed ground-level transportation system in which people could travel in a hovering pod inside a vacuum tube at speeds as high as 760 mph (1220 km/h), just shy of the speed of sound."
        },
        {
            "id": 52,
            "title": "HYPERLOOP TECHNOLOGY ",
            "Image": "https://www.electronicsforu.com/wp-contents/uploads/2018/03/Cutting-edge-Hyperloop-station-proposed-by-RB-Systems-.jpg",
            "category": "technology",
            "description": "A hyperloop, as you may have heard, is a super speed ground-level transportation system in which people could travel in a hovering pod inside a vacuum tube at speeds as high as 760 mph (1220 km/h), just shy of the speed of sound."
        },
        {
            "id": 22,
            "title": "5G IN INDIA.",
            "Image": "https://www.91-cdn.com/hub/wp-content/uploads/2022/05/5G.jpg",
            "category": "Technology",
            "description": "The government has ordered the launch of 5G services in India at the inauguration of the Indian mobile congress. The 5G network launch date in India is scheduled for September 29th, and telecom companies are gearing up to be the first 5G bands in India.For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction preferred summer camp getaway."
        },
        {
            "id": 63,
            "title": "DISNEY ",
            "Image": "https://c8.alamy.com/comp/G6REPB/cinderella-castle-at-magic-kingdom-disney-world-orlando-florida-G6REPB.jpg",
            "category": "footer3",
            "description": "Our Mission. The mission of The Walt Disney Company is to entertain,  refle the iconic brands, creative minds and innovative technologies that make ours the world's premier entertainment companyExisting customers will start paying $14.99, an increase of $1, with overall savings of around $14 — basically  iPad, Apple TV, Android and Chromebooks. App download links: The Disney Plus apps  ."
        },
        {
            "id": 22,
            "title": "TESLA CYBER TRUCK ",
            "Image": "https://media.wired.com/photos/5dd828ba9ac14a0008116983/2:1/w_2160,h_1080,c_limit/Transpo_TeslaStoryOne_Cybertruck-5.jpg",
            "category": "Technology",
            "description": "Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.."
        },
        {
            "id": 23,
            "title": "LATEST MOBILE TECHNOLOGY",
            "Image": "https://www.mymobilereviewer.com/wp-content/uploads/2019/05/mobile_technology.jpg",
            "category": "Technology",
            "description": "Mobile development has become a priority and the new normal for many businesses. Without mobile-optimized solutions, companies undoubtedly risk losing a significant number of clients and lagging behind the competition. In this article, we’ve compiled the main mobile trends now and for the coming years."
        },
        {
            "id": 25,
            "title": "LATEST TECHNOLOGY IN LAPTOP'S",
            "Image": "https://storage-asset.msi.com/global/picture/news/2020/nb/2020ces-20200401-1.jpg",
            "category": "Technology",
            "description": "The best laptop of 2022 can come with a variety of brands, prices, and features. Here, we’ve got the rest of the best laptops, Windows 10 business notebooks, gaming laptops, Chromebooks, laptops for school, and 2-in-1 convertibles It's getting harder to buy a bad laptop, but what separates the best laptops from good laptops is how they balance power, efficiency, portability, and comfort. The top laptop should have a fantastic keyboard and trackpad — after all, those are the two biggest reasons you'd choose a laptop over a smartphone or tablet. Its display should be easy on the eyes, bright, and sharp enough that you aren't distracted by jagged edges and visible pixels. It should be powerful enough for most anything short of intensive video editing and advanced gaming. It should be easy to carry around from place to place, and it should be able to last all day without needing to be plugged in.."
        },
        {
            "id": 31,
            "title": "GYM",
            "Image": "https://www.uaecentral.com/wp-content/uploads/2022/06/Muscular-Man-Doing-Push-ups-one-Hand-780x450.jpg",
            "category": "Fitness",
            "description": "As opposed to a ''typical'' gym, a fitness center may provide both indoor and outdoor health and fitness activities. A fitness center is usually larger than an average gym, especially if it includes amenities such as outdoor pool, golf course, running tracks.."
        },
        {
            "id": 32,
            "title": "HEALTHY EXERCISE TO BE FIT ",
            "Image": "https://static01.nyt.com/images/2016/08/07/health/7-minute-workout-cover/7-minute-workout-cover-sfSpan.jpg",
            "category": "Fitness",
            "description": "They keep your heart, lungs, and circulatory system healthy and improve your overall fitness. Examples include brisk walking, jogging, swimming, and biking. Strength, or resistance training, exercises make your muscles stronger. Some examples are lifting weights and using a resistance band. "
        },
        {
            "id": 33,
            "title": " YOGA BEAT WAY TO BUILD STRENGTH",
            "Image": "https://alignedsigns.com/wp-content/uploads/2012/03/Yoga-Routines-for-Healthy-Life.jpg",
            "category": "Fitness",
            "description": "Yes, yoga is a good way to build muscle tone and strength. By regularly doing yoga, you can build muscle, improve your flexibility, improve your posture, and help you maintain a healthy weight. Poses like Downward-Facing Dog and the Warrior poses work to increase strength in just about every muscle in your body. "
        },
        {
            "id": 34,
            "title": "ZUMBA BOOSTS YOUR HEART",
            "Image": "https://i.ytimg.com/vi/HRkNfdlm5Qs/maxresdefault.jpg",
            "category": "Fitness",
            "description": "Zumba targets lots of different muscle groups at once for total body toning. Boosts your heart health. You not only get aerobic benefits (it really gets your heart rate up), you also get anaerobic benefits – the kind that help you maintain a good cardiovascular S system. Helps you de-stress."
        },
        {
            "id": 35,
            "title": " TYPE OF FITNESS BENEFITS ",
            "Image": "https://1zywyj2snl841a00uzb2czsr-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/5-Basic-Types-of-Fitness-Centers-Forge-Online-Personal-Training-1500x933.jpg",
            "category": "Fitness",
            "description": "Research has shown that it's important to get all four types of exercise: endurance, strength, balance, and flexibility. Each one has different benefits.  "
        },
        {
            "id": 37,
            "title": "PHYSICAL FITNESS",
            "Image": "https://cdn.webshopapp.com/shops/281654/files/287946537/tunturi-ub-80-verstelbare-halterbank-fitnessbank-b.jpg",
            "category": "mix",
            "description": "Experts define physical fitness as “one's ability to execute daily activities with optimal performance, endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior.” This description goes beyond being able to run quickly or lift heavy weights."
        },


        {
            "id": 42,
            "title": "ARABIAN MANDI",
            "Image": "https://th-i.thgim.com/public/life-and-style/food/lgml07/article30633143.ece/alternates/LANDSCAPE_1200/mandi-dinesh",
            "category": "Food",
            "description": "Mandi (Arabic: مندي) is a traditional dish that originated from Hadhramaut, Yemen, consisting mainly of meat and rice with a special blend of spices, cooked in a pit underground. It is popular and commonly consumed in most areas of the Arabian Peninsula, and even considered a staple dish in many regions.."
        },
        {
            "id": 43,
            "title": "KFC (Kentucky Fried Chicken)",
            "Image": "https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg",
            "category": "Food",
            "description": "KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the world's second-largest restaurant chain (as measured by sales) after McDonald's, with 22,621 locations globally in 150 countries as of December 2019."
        },
        {
            "id": 44,
            "title": "BURGER",
            "Image": "https://assets.cntraveller.in/photos/6246f468c579dd6f2d1244b6/master/pass/Best%20Burgers%20in%20Mumbai%20_Louis%20Monstercheese%20Burger.jpg",
            "category": "Food",
            "description": "Freshness was still frequently mentioned as well. Consumers also used adjectives like “smothered,” “loaded,” “simple,” and “fixings” to describe their burger preferences. Some direct consumer responses highlight all these findings below: Juicy, big, loaded with toppings of my choice.\."
        },
        {
            "id": 45,
            "title": "COOL CAKE BLACK FOREST",
            "Image": "https://i.ytimg.com/vi/N3xrwNKglKo/maxresdefault.jpg",
            "category": "Food",
            "description": "Cool cakes are basically moist cakes that are usually served chilled and are very common pastry in India. I would say they are similar to poke cakes but not quite as moist as those. A classic cool cake should be really light and airy."
        },
        {
            "id": 46,
            "title": "CHOCOLATES",
            "Image": "https://www.thespruceeats.com/thmb/_fnt6QUNF7i8k3gn3ZL6C_ejbm0=/1001x1001/smart/filters:no_upscale()/chocolate_hero1-d62e5444a8734f8d8fe91f5631d51ca5.jpg",
            "category": "food",
            "description": "Increases heart health: The antioxidants in dark chocolate have been shown to lower blood pressure, reduce the risk of clotting and increase blood circulation to the heart, thus lowering the risks of stroke, coronary from heart disease.."
        },

        {
            "id": 58,
            "title": "BEST BREAKFAST ",
            "Image": "https://www.lacademie.com/wp-content/uploads/2022/03/indian-breakfast-recipes.jpg",
            "category": "mix",
            "description": "Idli or idly (/ɪdliː/ ( listen)) is a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice."
        },


    ]);
    return (
        <div>
            <store.Provider value={[details, setDetails]}>

                {props.children}


            </store.Provider>
        </div>
    )
}

export default Details