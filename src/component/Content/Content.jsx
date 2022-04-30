import React from 'react'
import FilterBar from '../FilterBar/FilterBar'
import { MdOutlineArrowDropDown } from "react-icons/md"

const Content = () => {

  const reposData = [
    {
      "id": 1,
      "title": "awesome-github-profile-readme ",
      "privacy": "public" || "private" ,
      "isForked": {
        "forkName": "abhisheknaiidu/awesome-github-profile-readme",
        "forkLink": "/"
      },
      "description": "😎 A curated list of awesome GitHub Profile READMEs 📝",
      "tags": ["Python", "HTML", "Typescript", "NodeJs"],
      "language": "Javascript",
      "languageColor": "#00ff00",
      "starred": 5,
      "forks": 12,
      "licence": "GNU Affero General Public License v3.0",
      "updated" : 12
    },
    {
      "id": 2,
      "title": "awesome-github-profile-readme ",
      "privacy": "public" || "private" ,
      "isForked": {
        "forkName": "abhisheknaiidu/awesome-github-profile-readme",
        "forkLink": "/"
      },
      "tags": ["Python", "HTML", "Typescript", "NodeJs"],
      "language": "Javascript",
      "languageColor": "#00ff00",
      "starred": 5,
      "forks": 12,
      "licence": "GNU Affero General Public License v3.0",
      "updated" : 12
    },
    {
      "id": 3,
      "title": "awesome-github-profile-readme ",
      "privacy": "public" || "private" ,
      "isForked": {
        "forkName": "abhisheknaiidu/awesome-github-profile-readme",
        "forkLink": "/"
      },
      "description": "😎 A curated list of awesome GitHub Profile READMEs 📝",
      "tags": ["Python", "HTML", "Typescript", "NodeJs"],
      "language": "Javascript",
      "languageColor": "#00ff00",
      "starred": 5,
      "forks": 12,
      "updated" : 12
    }
  ]

  return (
    <section className='basis-3/4 px-2'>
      {/* pages use-react router here!*/}
      <section>
      <FilterBar />
        {reposData?.map((repo) => (
          <div key={repo?.id} className='w-full flex flex-row items-center justify-between border-t py-4'>
            <div className="basis-3/4 flex flex-col items-start justify-center">
              
              {/* title and privacy */}
             <div className='flex flex-row items-center justify-center'>
                <span className='text-blue-600 font-semibold mr-2 text-lg hover:underline cursor-pointer'><a href={repo?.isForked?.forkLink}>{repo.title}</a></span>
                <span className='border border-gray-300 px-2  rounded-xl text-xs text-gray-600 capitalize'>{repo?.privacy}</span>
              </div>
              
              {/* forked from */}
              <p className='text-xs my-1 text-gray-600'>Forked from <a href={repo?.isForked?.forkLink} className='hover:text-blue-500 cursor-pointer'>{repo?.isForked?.forkName}</a></p>
              
              {/* description */}
              <p className='text-sm my-1 text-gray-600 w-2/3'>{repo?.description}</p>

              {/* tags */}
            <div className='flex flex-row items-center justify-center my-3 cursor-pointer'>
              <span className='mr-1 flex items-center justify-center font-semibold px-2 py-1 bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl text-xs'>personal-website</span>
              <span className='mr-1 flex items-center justify-center font-semibold px-2 py-1 bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl text-xs'>portfolio</span>
              <span className='mr-1 flex items-center justify-center font-semibold px-2 py-1 bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl text-xs'>Javascript</span>
            </div>
            <div className='flex flex-row items-center justify-center'>
              {/* language */}
              <span className='flex flex-row items-center justify-center text-xs  text-gray-600'>
                <span className='w-3 h-3 mr-1 rounded-full' style={{backgroundColor: `${repo?.languageColor}`}}></span>
                {repo?.language}
              </span>

              {/* stars */}
              <span className='mx-3 flex flex-row items-center justify-center text-gray-600 text-xs'>
                <svg aria-hidden="true" height="14" viewBox="0 0 16 16" version="1.1" width="14" data-view-component="true" className="text-gray-700 hover:text-black ">
                <path fill='currentColor' fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
               </svg>
                  <p className='mx-1'>{repo?.starred}</p>
              </span>

              {/* fork */}
              <a href='/' className='mx-1.5 flex flex-row items-center justify-center text-gray-600 text-xs hover:text-blue-500 cursor-pointer'>
                <svg aria-label="fork" role="img" height="14" viewBox="0 0 16 16" version="1.1" width="14" data-view-component="true" >
                    <path fill='currentColor' fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                </svg>
                  <p className='mx-1'>{repo?.forks}</p>
              </a>
              {/* licence */}
              <span className='mx-3 flex flex-row items-center justify-center text-gray-600 text-xs'>
                <svg aria-hidden="true" height="14" viewBox="0 0 16 16" version="1.1" width="14" data-view-component="true" class="octicon octicon-law mr-1">
                    <path fill='currentColor' fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path>
                </svg>
                  <p className='mx-1'>{repo?.licence}</p>
              </span>
              
                {/* updated */}
              <p className='mx-3 text-gray-600 text-xs'>Updated {repo?.updated} days ago</p>
            </div>
            </div>
            

          <div className="basis-1/4 flex flex-col items-end justify-between">
             <button className='px-2 mb-8 py-1 flex flex-row items-center text-sm font-semibold text-gray-800 justify-between border bg-gray-100 rounded focus:bg-gray-200 focus:outline-none'>
              <svg aria-hidden="true" height="14" viewBox="0 0 16 16" version="1.1" width="14" data-view-component="true" className="text-gray-700 hover:text-black ">
                <path fill='currentColor' fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
               </svg>
              <p className='mx-2'>Star</p>
              <MdOutlineArrowDropDown className='text-lg ml-1 text-gray-600 border-l border-l-2 '/>
              </button>
            <div className=''>
              <svg width="155" height="30">
                  <defs>
                    <linearGradient id="gradient-480378093" x1="0" x2="0" y1="1" y2="0">
                      <stop offset="0%" stop-color="var(--color-calendar-graph-day-L1-bg)"></stop>
                      <stop offset="10%" stop-color="var(--color-calendar-graph-day-L2-bg)"></stop>
                      <stop offset="25%" stop-color="var(--color-calendar-graph-day-L3-bg)"></stop>
                      <stop offset="50%" stop-color="var(--color-calendar-graph-day-L4-bg)"></stop>
                    </linearGradient>
                    <mask id="sparkline-480378093" x="0" y="0" width="155" height="28">
                      <polyline transform="translate(0, 28) scale(1,-1)" points="0,5.39 3,7.41 6,7.41 9,6.86 12,10.15 15,6.49 18,9.05 21,6.49 24,9.42 27,7.59 30,11.43 33,4.48 36,5.94 39,5.58 42,8.870000000000001 45,5.03 48,8.14 51,7.04 54,9.24 57,7.77 60,10.7 63,6.67 66,13.99 69,8.14 72,29.0 75,13.44 78,6.31 81,4.84 84,6.49 87,6.49 90,8.5 93,6.12 96,15.27 99,4.66 102,4.66 105,5.76 108,5.76 111,5.03 114,7.95 117,12.16 120,7.22 123,11.61 126,8.870000000000001 129,4.48 132,7.77 135,6.31 138,12.53 141,11.61 144,14.73 147,8.32 150,1.0 153,1.0 " fill="transparent" stroke="#8cc665" stroke-width="2">
                    </polyline></mask>
                  </defs>

                  <g transform="translate(0, 2.0)">
                    <rect x="0" y="-2" width="155" height="30"  style={{stroke: "none", fill: "green", mask: `url(#sparkline-480378093)`}}></rect>
                  </g>
                </svg>
            </div>
          </div>
      </div>
        ))}
    </section>
    </section>
  )
}

export default Content