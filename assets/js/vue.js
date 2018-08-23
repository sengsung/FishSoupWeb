var navigate = new Vue({
    el:'.navigate',
    data:{
        list:[
            {
                title:"생선스프",
                link:"#"
            },
            {
                title:"프로젝트",
                link:"#project"
            },
            {
                title:"활동경력",
                link:"#activity"
            }
        ]
    }
})

var list1 = new Vue({
    el:'#list-1',
    data:{
        list:[
            {
                title:'프로젝트',
                color:'#92afd7',
                sub:true,
                name:'project'
            },
            {
                title:'끄투코리아',
                text : ["끄투코리아는 끝말잇기를 웹게임으로 재구성한 온라인 게임이며, 2017년 2월 16일에 서비스를 시작하였습니다. 원작인 \"끄투\" 오픈소스를 입맛에 맞게 개조하여 운영중입니다.","끄투코리아팀에서 개발을 맡고 있습니다."],
                img : "/assets/img/kkutu.png",
                black:true
            },
            {
                title:'디미급식',
                text : ["디미급식은 디미고인이 빠르고 편하게 급식 정보를 확인할 수 있도록 제작된 카카오톡 봇입니다","디미급식의 개발을 하고 있습니다"],
                img : "/assets/img/rice.jpg",
                black:true
            },
            {
                title:'PL4YBOY',
                text : ["PL4YBOY는 디미고인들이 모여 만든 워게임 사이트 입니다.","PL4YBOY 팀에서 백엔드 개발을 맡고 있습니다."],
                img:"/assets/img/playboy.png",
                black:false
            },
            {
                title:'활동 경력',
                color:'#d3f8e2',
                sub:true,
                name:'activity'
            },
            {
                title:'TRUST',
                text : [""],
                img:"assets/img/trust.png",
                black:true
            },
            {
                title:'SPACE',
                img:"assets/img/space.png",
                text:[""],
                black:true
            }
        ]
    },
    methods: {
        ddi: function () {
          alert('띠용');
        }
      }
})

var list2 = new Vue({
    el:'#list-2',
    data:{
        list:[
            {
                title:'없음',
                text:'있고싶음'
            }
        ],
        title:'수상경력',
        seen:true
    },
    methods: {
        ddi: function () {
            //alert('훌쩍..');
            this.title = "훌쩍";
            this.list[0].title="ㅠㅠ";
            this.list[0].text='상받고싶어요';
            this.seen=false;
        }
      }
})

var list3 = new Vue({
    el:"#list-3",
    data:{
        list:[
            {
                title:"VB.NET",
                year:"2014~",
                skill:"고급"
            },
            {
                title:"C#",
                year:"2018~",
                skill:"초급"
            },
            {
                title:"JAVA",
                year:"2018~",
                skill:"입문"
            },
            {
                title:"Android(JAVA)",
                year:"2018~",
                skill:"입문"
            },
            {
                title:"C",
                year:"2015~",
                skill:"중급"
            },
            {
                title:"Python",
                year:"2018~",
                skill:"입문"
            },
            {
                title:"HTML",
                year:"2018~",
                skill:"초급"
            },
            {
                title:"CSS",
                year:"2018~",
                skill:"초급"
            },
            {
                title:"Node.js",
                year:"2018~",
                skill:"초급"
            },
            {
                title:"Pug",
                year:"2018~",
                skill:"초급"
            },
            {
                title:"Vue.js",
                year:"2018~",
                skill:"초급"
            }
            
        ]
    }
})
