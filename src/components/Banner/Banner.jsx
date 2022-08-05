import React, { useEffect, useState } from 'react'
import { FaCalendar, FaClock } from 'react-icons/fa'
import './banner.css'

const bannerUrl = [
    {   title: 'My StepSister is My Ex-GirlFriend',
        duration: '23m',
        releaseDate: 'Jul 6, 2022',
        isHd: true,
        isSub: true,
        isDub:false,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/e5/d3/e5d3083f894cf04aa13fa2bdba04d569/e5d3083f894cf04aa13fa2bdba04d569.jpg',
        desc:"A certain boy and girl in middle school became lovers, flirted with each other, disagreed on trivial things, became more frequently irritated with each other rather than excited... and ended up breaking up at graduation. And so the two of them, Mizuto Irido and Yume Ayai, wound up meeting each other in the most unexpected fashion.",
    },
    {
        title: "Shadow House Season 2",
        duration: '24m',
        releaseDate: 'Jul 9, 2022',
        isHd: true,
        isSub: true,
        isDub:true,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/7a/d3/7ad3afe15a650b81c7f536ee1a2a8732/7ad3afe15a650b81c7f536ee1a2a8732.jpg',
        desc:"Emilico is just one of many 'Living Dolls' serving in the Shadows House, residents of which are pitch black from head to toe and constantly leak soot that stains the house black. Each 'Shadow' is partnered with a Doll, which strangely resembles the other. As a Living Doll, Emilico must keep the house sparkling clean as well as act as the face for her master, Kate. In turn, Kate supports Emilico and treats her as her confidant.",
    },
    {
        title: "Love after World Domination",
        duration: '23m',
        releaseDate: 'Apr 8, 2022',
        isHd: true,
        isSub: true,
        isDub:true,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/3b/74/3b74533e837daa1879610dff9872a87e/3b74533e837daa1879610dff9872a87e.jpg',
        desc:'Fudou Aikawa and Desumi Magahara have just started dating, but no one is allowed to know! Nicknamed "Red Gelato," Fudou is the leader of "Gelato 5," a group of heroes dedicated to protecting Japan. On the other hand, the "Reaper Princess" Desumi is one of the combatant leaders of "Gekko," an evil secret society bent on world domination and considered Gelato 5s greatest foe. As they pretend to be mortal enemies, Fudou and Desumi sneak away from battle to spend time together.',
    },
    {
        title: "Spy x Family",
        duration: '24m',
        releaseDate: 'Apr 7, 2022',
        isHd: true,
        isSub: true,
        isDub:true,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/7e/aa/7eaa9756161dffe3f656c77f8f720e4f/7eaa9756161dffe3f656c77f8f720e4f.jpg',
        desc:'Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise "Twilight" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war. In the bustling Ostanian city of Berlint, Twilight dons the alias of "Loid Forger," an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion.',
    },
    {
        title: "Date A Live IV",
        duration: '24m',
        releaseDate: 'Apr 8, 2022',
        isHd: true,
        isSub: true,
        isDub:true,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/b9/9f/b99f52afc71187673e9db1a84e5a2995/b99f52afc71187673e9db1a84e5a2995.jpg',
        desc:'Despite the numerous challenges he has overcome so far, Shidou Itsukas mission with Ratatoskr is far from over. In a departure from his daily routine, Shidou encounters a starving woman lying on the street and ends up helping her. After the two arrive at her apartment, the woman introduces herself as Nia Honjou—a popular manga artist working under a pen name. However, cutting straight to the chase, Nia reveals that she is also a Spirit and is aware of Shidous secret operation.',
    },
    {
        title: "Friends Game",
        duration: '23m',
        releaseDate: 'Apr 5, 2022',
        isHd: true,
        isSub: true,
        isDub:true,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/5c/b6/5cb6188f59f2640a64aa1b4328a692a4/5cb6188f59f2640a64aa1b4328a692a4.jpg',
        desc:'High school student Yuuichi Katagiri cherishes his close circle of friends, composed of four classmates: Yutori Kokorogi, Shiho Sawaragi, Makoto Shibe, and Tenji Mikasa. However, when the funds for the upcoming school trip are stolen, the incident causes Shiho and Makoto—who had been tasked with collecting the money—to distance themselves from the rest of their class.Soon after, Yuuichi and his friends are deceived into meeting up and knocked unconscious by unknown assailants. After waking, the group find themselves confined in a white room with controversial figure Manabu-kun, who reveals that one of the five has gathered them together to clear their personal debt of twenty million yen. To pay off the amount, they must participate in a variety of psychological games that will test the true nature of their friendship and humanity.',
    },
    {
        title: "Ya Boy Kongming!",
        duration: '24m',
        releaseDate: 'Apr 8, 2022',
        isHd: true,
        isSub: true,
        isDub:true,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/77/7a/777a0334d1dcf9c5ef3209c47533e65d/777a0334d1dcf9c5ef3209c47533e65d.jpg',
        desc:'Zhuge Kongming earned a reputation as one of the greatest tacticians of the Three Kingdoms period of third-century China. Having led his army through countless grueling victories, Kongming falls gravely ill during the Battle of Wuzhang Plains. The weariness and regret stemming from the seemingly never-ending war catch up to him, and as he draws his final breath, Kongming wishes that if he were to reincarnate, he would be reborn in a more peaceful era.',
    },
    {
        title: "Bleach",
        duration: '24m',
        releaseDate: 'Oct 5, 2004',
        isHd: true,
        isSub: true,
        isDub:true,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/7f/bf/7fbf5929f0bff5d221897922cfc783a0/7fbf5929f0bff5d221897922cfc783a0.jpg',
        desc:"Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.",
    },
    {
        title: "Sabikui Bisco",
        duration: '24m',
        releaseDate: 'Jan 11, 2022',
        isHd: true,
        isSub: true,
        isDub:true,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/12/e2/12e29a2e6d196cd5c7247d377b119e8a/12e29a2e6d196cd5c7247d377b119e8a.jpg',
        desc:'An apocalyptic event has ravaged Japan, leaving nothing but endless sandy plains behind, and a strange rusting disease terrorizes the remnants of civilization. According to the government, the horrific state of the new world is the result of mushroom spores being spread by the likes of Bisco Akaboshi, labeled the "Man-Eating Mushroom."',
    },
    {
        title: "My Hero Academia the Movie 3: World Heroes",
        duration: '24m',
        releaseDate: 'Jan 11, 2022',
        isHd: true,
        isSub: true,
        isDub:true,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/79/97/7997ae0a86bb2cf005497d253ad81348/7997ae0a86bb2cf005497d253ad81348.jpg',
        desc:'The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
    },
    {
        title: "Tokyo Revengers (Uncensored)",
        duration: '23m',
        releaseDate: 'Apr 11, 2021',
        isHd: true,
        isSub: true,
        isDub:true,
        isMla: false,
        img:'https://img.zorores.com/_r/1366x768/100/21/be/21be4c91ab1a6be0efaf8e628eb010ac/21be4c91ab1a6be0efaf8e628eb010ac.jpg',
        desc:'Takemichi Hanagaki’s second year of middle school was the highest point in his life. He had respect, a gang of friends he could count on, and even a girlfriend. But that was twelve years ago. Today, he’s a nobody: a washed-up nonentity made fun of by children and always forced to apologize to his younger boss. A sudden news report on the Tokyo Manji Gang’s cruel murder of the only girlfriend he ever had alongside her brother only adds insult to injury. Half a second before a train ends his pitiful life for good, Takemichi flashes back to that same day twelve years ago, when he was still dating Hinata Tachibana.',
    },
]

const Banner = () => {

    const [bannerImg, setBannerImage] = useState(0)

    const changeBannerRight = () => {
        const t = 50
        let interval = setInterval(() => {
            let ele = document.getElementById('banner')
            if(ele.style.marginLeft  == ""){
                ele.style.marginLeft = '10px' 
            }
            else if(bannerImg<bannerUrl.length-1){
                let r = ele.style.marginLeft
                r = r.slice(0, r.length-2)
                if(Number(r) >= window.innerWidth){
                    clearInterval(interval)
                    setBannerImage(ele=>ele+1)
                    ele.style.marginLeft = '0px'
                    return
                }
                console.log(r)
                r = (Number(r) + t)
                ele.style.marginLeft = r + 'px' 
            }
            
        }, 1)
    }
    const changeBannerLeft = () => {
        const t = 50
        let interval = setInterval(() => {
            let ele = document.getElementById('banner')
            if(ele.style.marginLeft  == ""){
                ele.style.marginLeft = '10px' 
            }
            else if(bannerImg>0){
                let r = ele.style.marginLeft
                r = r.slice(0, r.length-2)
                if(Number(r) <= -window.innerWidth){
                    clearInterval(interval)
                    setBannerImage(ele=>ele-1)
                    ele.style.marginLeft = '0px'
                    return
                }
                // console.log(r)
                r = (Number(r) - t)
                ele.style.marginLeft = r + 'px' 
            }
            
        }, 1)
    }

    return (
        <div className='bannerWrapper'>
            <img src={bannerUrl[bannerImg].img} alt="" id='banner' />
            <div className='bannerData'>
                <div className='bannerDesc'>
                    <div className='bannerSpotlight'>#{bannerImg+1} Spotlight</div>
                    <div className='bannerTitle'>{bannerUrl[bannerImg].title}</div>
                    <div className='banner'>
                        <p><FaClock/> {bannerUrl[bannerImg].duration}</p>
                        <p><FaCalendar/> {bannerUrl[bannerImg].releaseDate}</p>
                        {
                            bannerUrl[bannerImg].isHd?(<div className='bannerHD'>HD</div>):(<div></div>)
                        }
                        {
                            bannerUrl[bannerImg].isSub?(<div className='bannerSUB'>SUB</div>):(<div></div>)
                        }
                        {
                            bannerUrl[bannerImg].isDub?(<div className='bannerSUB'>DUB</div>):(<div></div>)
                        }
                    </div>
                    <div className='desc'>
                        <div>{bannerUrl[bannerImg].desc}</div>
                    </div>
                    <div className='bannerBtn'>
                        <input type="button" value="Watch Now" className='bannerWatch' style={{backgroundColor:"#cae962"}} />
                        <input type="button" value="Detail" className='bannerWatch' />
                    </div>
                    </div>
                <div className='bannerChange'>
                    <div><button name='right' onClick={changeBannerRight}  >{'>'}</button></div>
                    <div><button name='left' onClick={changeBannerLeft}>{'<'}</button></div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner