import { RiHome6Line } from "react-icons/ri";
import { GoHeartFill } from "react-icons/go";
import { LuCodeXml } from "react-icons/lu";
import { PiCat } from "react-icons/pi";
import { LuCookingPot } from "react-icons/lu";
import { TbBrandFunimation } from "react-icons/tb";
import { BiNews } from "react-icons/bi";

import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
import { RxNotionLogo } from "react-icons/rx";

export const headerMenus = [
    {
        title : "마이 홈",
        icon : <RiHome6Line />,
        src : "/"
    },
    {
        title : "추천 영상",
        icon : <GoHeartFill />,
        src : "/today"
    },
    {
        title : "추천 개발자",
        icon : <LuCodeXml />,
        src : "/developer"
    },
    {
        title : "추천 집사",
        icon : <PiCat />,
        src : "/cat"
    },
    {
        title : "집밥 요리사",
        icon : <LuCookingPot />,
        src : "/cooker"
    },
    {
        title : "심심할땐 예능",
        icon : <TbBrandFunimation />,
        src : "/varietyShow"
    },
    {
        title : "오늘의 뉴스",
        icon : <BiNews />,
        src : "/news"
    }
];

export const searchKeyword = [
    {
        title : "HTML",
        src : "/search/html"
    },
    {
        title : "CSS",
        src : "/search/css"
    },
    {
        title : "JavaScript",
        src : "/search/javascript"
    },
    {
        title : "React.js",
        src : "/search/react.js"
    },
    {
        title : "Vue.js",
        src : "/search/vue.js"
    },
    {
        title : "Next.js",
        src : "/search/next.js"
    },
    {
        title : "TypeScript",
        src : "/search/typescript"
    },
    {
        title : "Music",
        src : "/search/New.Jeans"
    }
];

export const snsLink = [
    {
        title : "GitHub",
        url : "https://github.com/sunmi-tech",
        icon : <AiFillGithub />
    },
    {
        title : "Velog",
        url : "https://velog.io/@tjsal6625/posts",
        icon : <SiVelog />
    },
    {
        title : "Notion",
        url : "https://www.notion.so/dda4e03387804eb681d7fd835a50f6cf",
        icon : <RxNotionLogo />
    }
]