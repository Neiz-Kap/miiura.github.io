<div class="boosters"> 145 * 220px
   75.5 * 220px <img class="booster" src="img/booster.png" alt="booster" class="booster">
   75.5 * 220px <img class="booster" src="img/booster.png" alt="booster" class="booster">
</div>
<div class="boosters active"> 145 * 220px
    75.5 * 220px <img class="booster" src="img/booster.png" alt="booster" class="booster">
    75.5 * 220px <img class="booster" src="img/booster.png" alt="booster" class="booster">
</div>


<div class="boosters boosters-2">
    <img class="booster" src="img/booster.png" alt="booster" class="booster">
    <img class="booster" src="img/booster.png" alt="booster" class="booster">
</div>
<div class="boosters boosters-2 active">
    <img class="booster" src="img/booster.png" alt="booster" class="booster">
    <img class="booster" src="img/booster.png" alt="booster" class="booster">
</div>


.boosters {
    max-width: 145px;
    max-height: 220px;
    margin: 0 35px 0 45px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: absolute;
    top: 400px;
    z-index: -99999999;
}

.boosters-2 {
    position: absolute;
    z-index: -999999;
    bottom: 0;
    top: 240px;
    left: 14px;
}

.boosters-2>.booster {
    max-height: 200px;
}