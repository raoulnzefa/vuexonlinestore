<template>
    <div id="bg">
        <div id="bg-blob">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1153.033" height="914.924" viewBox="0 0 1153.033 914.924">
                <defs>
                    <filter id="Path_1" x="0" y="0" width="1153.033" height="914.924" filterUnits="userSpaceOnUse">
                    <feOffset dy="3" input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="6" result="blur"/>
                    <feFlood flood-opacity="0.161"/>
                    <feComposite operator="in" in2="blur"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)">
                    <path id="Path_1-2" data-name="Path 1" d="M.02,185.848s-1.372,812.328,0,812.633c69.687,58.13,196.5,91.327,424.334,40.4,247.3-55.282,233.811-223.552,507.049-341.03,183.64-106.024,164.756-343.669,185.041-512C1116.658,184.07.02,185.848.02,185.848Z" transform="translate(18.59 -170.06)" fill="#5eb4ff"/>
                </g>
            </svg>
        </div>
        <div id="bg-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="1275" height="929.075" viewBox="0 0 1275 929.075">
                <path id="Path_6" data-name="Path 6" d="M637.5,0C989.582,0,1275,279.6,1275,624.5a614.036,614.036,0,0,1-81.067,304.575s-1113.214-.044-1113.238-.067A613.434,613.434,0,0,1,0,624.5C0,279.6,285.418,0,637.5,0Z" fill="#ffff86"/>
            </svg>
        </div>
        <div id="bg-border">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="891.741" height="958.44" viewBox="0 0 891.741 958.44">
                <defs>
                    <filter id="Path_2" x="0" y="0" width="891.741" height="958.44" filterUnits="userSpaceOnUse">
                    <feOffset dy="3" input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="6" result="blur"/>
                    <feFlood flood-opacity="0.161"/>
                    <feComposite operator="in" in2="blur"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_2)">
                    <path id="Path_2-2" data-name="Path 2" d="M212.619,701.679s122,30.691,180.28,15.075c103.344-27.691,127.283-140.391,232.917-226.96,37.587-31.179,158.727,101.974,221.713,50.253,38.378-31.514,74.426-77.919,107.063-130.294.061-.016-430.1-248.316-430.1-248.316h0Z" transform="translate(536.25 -249.85) rotate(60)" fill="#5eb4ff"/>
                </g>
            </svg>
        </div>
        <div id="bg-triangle">
            <svg xmlns="http://www.w3.org/2000/svg" width="902.293" height="579.853" viewBox="0 0 902.293 579.853">
                <path id="Path_5" data-name="Path 5" d="M446.632,19.556c.169-.583,18.411-10.151,22.181-3.117L912.105,843.275A10,10,0,0,1,903.292,858l-338.623,1.436S444.055,24.682,446.632,19.556Z" transform="translate(-75.887 902.488) rotate(-82)" fill="#5eb4ff"/>
            </svg>
        </div>
    </div>
</template>
<style lang="scss">
    #bg{
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        overflow:hidden;
        &-blob{
            position:absolute;
            top:-100px;
            left:-100px;
            z-index:4;
        }
        &-circle{
            position:absolute;
            bottom:-5px;
            left:100px;
            z-index:3;
        }
        &-triangle{
            position:absolute;
            bottom:-200px;
            right:100px;
            z-index:1;
        }
        &-border{
            position:absolute;
            top:-300px;
            right:-450px;
            z-index:2;
        }
    }
</style>