<template>
  <LandingLayout>
    <template>
      <section class="Slide" style="background: #F4A14E">
        <div class="SlideContainer">
          <div class="SlideContainerText">
            <div class="SlideContainerTextWrap">
              <h1>Reach Your Perfect <br> Facebook Audience</h1>
              <p class="--light">Explore 1000's of hidden and<br>niche interests unavailable with standard Facebook interface.</p>
            </div>
            <form class="EmailForm">
              <input v-model="email" placeholder="Email address" type="text">
              <button type="button" @click="redirectTo()" class="--light">Start free</button>
            </form>
          </div>
          <div class="SlideContainerImage">
            <img src="../../assets/img/slide/picture3.webp" alt="Reach Your Perfect Facebook Audience">
          </div>
        </div>
      </section>
      <main class="MainLayoutMain">
        <section class="Pros">
          <div class="ProsContainer">
            <div class="ProsTitle">
              <h2>Take the Guesswork out of Your Interest Targeting</h2>
              <p>Spend less on your Facebook Ads and get better results</p>
            </div>
            <div class="ProsItems">
              <div class="ProsItem">
                <img class="ProsItemImage" src="../../assets/img/pros/find.svg" alt="Create in Bulk">
                <h5>Expand Your Targeting</h5>
                <p>Discover untapped low-competition interests that <br> are hidden from most advertisers.</p>
              </div>
              <div class="ProsDivider"></div>
              <div class="ProsItem">
                <img class="ProsItemImage" src="../../assets/img/pros/speedometr.svg" alt="Automate Routines">
                <h5>Speed up Your Research</h5>
                <p>Filter your interests list by size, type or category and <br> add them to your selection.</p>
              </div>
              <div class="ProsDivider"></div>
              <div class="ProsItem">
                <img class="ProsItemImage" src="../../assets/img/pros/cash.svg" alt="Expand Your Targeting">
                <h5>Maximize your ROAS</h5>
                <p>Spend less on irrelevant traffic with an audience <br> that is truly interested in your good or service.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="Banner">
          <div class="BannerContainer">
            <div class="BannerText">
              <div class="BannerTitle">
                <h2>Reveal Thousands of Hidden and<br> Niche Facebook Interests</h2>
                <p>Search multiple keywords at once and get a full list of relevant interests <br> unavailable to your competition </p>
              </div>
              <ul class="BannerList">
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Search by broad topic with unlimited number of results</li>
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Target by any of the supported foreign languages for local markets</li>
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Make sure you’ll only see targetable interests with Facebook <br> Marketing API integration</li>
              </ul>
              <div class="BannerForm">
                <button @click="redirectTo()" class="primaryBtn">Try for free</button>
              </div>
            </div>
            <div class="BannerImage">
              <img src="../../assets/img/trialBanner/picture3.webp" alt="Create multiple ad variations at once">
            </div>
          </div>
        </section>
        <section class="Trial">
          <div class="TrialContainer">
            <div class="TrialImage">
              <img src="../../assets/img/trialReports/picture3.webp" alt="Create multiple ad variations at once">
            </div>
            <div class="TrialText">
              <div class="TrialTitle">
                <h2>Sort and Filter Your Interests to Find <br> Even More Low-Competition Audience</h2>
                <p>Easily find the most profitable interests with powerful search engine, smart <br> filters and sorting options unavailable with standart Facebook interface.</p>
              </div>
              <ul class="TrialList">
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Browse a neatly sorted list of interests, its sizes and categories</li>
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Get insight into each interest with a quick research option </li>
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Filter interest using any of available parameters</li>
              </ul>
              <div class="TrialForm">
                <button @click="redirectTo()" class="primaryBtn">Try for free</button>
              </div>
            </div>
          </div>
        </section>
        <section class="Trial">
          <div class="TrialContainer">
            <div class="TrialText">
              <div class="TrialTitle">
                <h2>Create Hyper-Focused Advertising <br> Based on People's Interests</h2>
                <p>Include interest layering in your targeting options to <br> acquire and convert new profitable audiences. </p>
              </div>
              <ul class="TrialList">
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Build more specific and narrow audience by overlapping various interests </li>
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Build audience as complex as you need with a drag-and-drop interface </li>
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Apply created interests directly to your Ad Set in a single click or <br> export it to a CSV file</li>
              </ul>
              <div class="TrialForm">
                <button @click="redirectTo()" class="primaryBtn">Try for free</button>
              </div>
            </div>
            <div class="TrialImage">
              <img src="../../assets/img/trialAds/picture3.webp" alt="Create multiple ad variations at once">
            </div>
          </div>
        </section>
        <section class="Reviews">       <!-- v   Reviews    v -->
          <div class="ReviewsTitle">
            <h2>What Our Users Say about Us</h2>
          </div>
          <div class="ReviewsContainer">
            <div class="ReviewsContainerItems">
              <div class="ReviewsContainerItemsItem">
                <div class="ReviewsContainerItemsItemText">
                  <img src="../../assets/img/reviews/apostrophes.webp" alt="apostrophes">
                  <p>I was looking for something like this: a tool to do some manual work for me. I thought it would be an assistant though... but ConvertBomb combines all I need for ad creation and management</p>
                </div>
                <div class="ReviewsContainerItemsItemUser">
                  <div class="ReviewsContainerItemsItemUserImage">
                    <img src="../../assets/img/reviews/Bob1.webp" alt="Paul Brenson">
                  </div>
                  <div class="ReviewsContainerItemsItemUserText">
                    <h5>Paul Brenson</h5>
                    <p>Social marketing specialist</p>
                  </div>
                </div>
              </div>
              <div class="ReviewsContainerItemsItem">
                <div class="ReviewsContainerItemsItemText">
                  <img src="../../assets/img/reviews/apostrophes.webp" alt="apostrophes">
                  <p>We’ve been using ConvertBomb for a month now and it’s a real catch. A/B testing ad campaigns is crucial and with ConvertBomb it’s also super easy.</p>
                </div>
                <div class="ReviewsContainerItemsItemUser">
                  <div class="ReviewsContainerItemsItemUserImage">
                    <img src="../../assets/img/reviews/Bob2.webp" alt="Robert Trego">
                  </div>
                  <div class="ReviewsContainerItemsItemUserText">
                    <h5>Robert Trego</h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div class="ReviewsContainerItemsItem">
                <div class="ReviewsContainerItemsItemText">
                  <img src="../../assets/img/reviews/apostrophes.webp" alt="apostrophes">
                  <p>Thanks to ConvertBomb, I discovered the world of ad automation and tactics. Much easier than on Facebook, so it’s been a great help.</p>
                </div>
                <div class="ReviewsContainerItemsItemUser">
                  <div class="ReviewsContainerItemsItemUserImage">
                    <img src="../../assets/img/reviews/Bob3.webp" alt="Rachel Burns">
                  </div>
                  <div class="ReviewsContainerItemsItemUserText">
                    <h5>Rachel Burns</h5>
                    <p>Social media manager</p>
                  </div>
                </div>
              </div>
              <div class="ReviewsContainerItemsItem">
                <div class="ReviewsContainerItemsItemText">
                  <img src="../../assets/img/reviews/apostrophes.webp" alt="apostrophes">
                  <p>With ConvertBomb we increased our ROAS by 150% which is an incredible result. Delegating control over your ads to automation software was the best idea to control our ad spend.</p>
                </div>
                <div class="ReviewsContainerItemsItemUser">
                  <div class="ReviewsContainerItemsItemUserImage">
                    <img src="../../assets/img/reviews/Bob4.webp" alt="Naomi Jones">
                  </div>
                  <div class="ReviewsContainerItemsItemUserText">
                    <h5>Naomi Jones</h5>
                    <p>Product manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TrialForm/>
      </main>
    </template>
  </LandingLayout>
</template>
<script>
  export default {
    name: 'FacebookAdsTargeting',
    data () {
      return {
        email: ''
      }
    },
    methods: {
      redirectTo () {
        document.location.replace(process.env.NUXT_BASE_DASHBOARD_URL + 'registration/sign-in' + (this.email.length ? '?email=' + this.email : '' ))
      }
    }
  }
</script>
