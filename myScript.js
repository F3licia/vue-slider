
const app = new Vue(

    {
        el: '#vueContainer',
        data: {
            imgs:["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg"] ,
            titles:["titolo-1", "titolo-2", "titolo-3", "titolo-4"],
            activeImg: 0,
            lastImg: 3,
            classi:[],
            },
         methods:{
                    forward() { 
                        this.imgs = this.imgs.sort(); 
                        this.activeImg = this.activeImg +1;
                        if(this.activeImg >= this.imgs.length){
                            this.activeImg = 0;
                        }
                        if(this.activeImg > this.imgs.length){
                            this.activeImg = 0;
                        }
                    },
                    back() {
                        this.activeImg = this.activeImg -1;
                        if(this.activeImg < 0){
                            this.activeImg = this.lastImg;
                        }
                    },
                    activeIndex(clicked){
                        this.activeImg = clicked;
                    }
                }
                
    } 
);




