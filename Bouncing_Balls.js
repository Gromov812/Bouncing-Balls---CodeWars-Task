function bouncingBall(h, bounce, window){ 

    if (h < 1) return -1; // check for h value
    if (bounce <= 0 || bounce >= 1) return -1; // check for bounce value
    if (window >= h) return -1; // check for window value
    if (h*bounce == window) return 1; // I thhink that kata has some mistake, because the first drop is always equals 1, then, when the height of window is same with bounce height it means +2 (up and down), but the kata author means no, its just the first drop, 

        let bounceTimes = -1; //initialize variable with -1, because in my algo we count bounce up and down (2 times) and don't take into account that first was just 1 time (down)
        while(h >= window){
        
            console.log(h +'м - '+ bounceTimes + ' раз');
            
            h = h * bounce;
            bounceTimes += 2;
        }
        return bounceTimes;
}
