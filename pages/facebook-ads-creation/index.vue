<template>
  <LandingLayout>
    <template>
      <section class="Slide" style="background: linear-gradient(102.88deg, #1793D9 0%, #1A6FD9 54.88%)">
        <div class="SlideContainer">
          <div class="SlideContainerText">
            <div class="SlideContainerTextWrap">
              <h1>Launch Facebook Ad Campaigns <br>in Less Time</h1>
              <p class="--light">Find the right combination of audience and creative with <br> advanced split testing and optimization.</p>
            </div>
            <form class="EmailForm">
              <input v-model="email" placeholder="Email address" type="text">
              <button type="button" @click="redirectTo()" class="--light">Start free</button>
            </form>
          </div>
          <div class="SlideContainerImage">
            <img style="max-width: min(100%, 1010px);margin-top: 30px;" src="../../assets/img/slide/picture2.webp" alt="Launch profitable Facebook ad campaigns in less time">
          </div>
        </div>
      </section>
      <main class="MainLayoutMain">
        <section class="Pros">
          <div class="ProsContainer">
            <div class="ProsTitle">
              <h2>Like an Extra Employee, but Even Better</h2>
              <p>Drop the manual work and gain more time to focus on strategy and creativity. </p>
            </div>
            <div class="ProsItems">
              <div class="ProsItem">
                <img class="ProsItemImage" src="../../assets/img/pros/layout.svg" alt="Create in Bulk">
                <h5>Create in Bulk</h5>
                <p>Create thousands of ads in a matter of
                  <br> minutes by multiplying different variations
                  <br> of creatives.</p>
              </div>
              <div class="ProsDivider"></div>
              <div class="ProsItem">
                <img class="ProsItemImage" src="../../assets/img/pros/gears.svg" alt="Automate Routines">
                <h5>Automate Routines</h5>
                <p>Set your ad account on auto-pilot and
                  <br> don't miss on any important ad
                  <br> performance changes 24/7.</p>
              </div>
              <div class="ProsDivider"></div>
              <div class="ProsItem">
                <img class="ProsItemImage" src="../../assets/img/pros/favoriteslist.svg" alt="Expand Your Targeting">
                <h5>Discover Insights</h5>
                <p>Easily identify factors affecting ads performance <br> the most such as titles, images, audiences and <br> more</p>
              </div>
            </div>
          </div>
        </section>
        <section class="Banner">
          <div class="BannerContainer">
            <div class="BannerText">
              <div class="BannerTitle">
                <h2>Create Multiple Ad Variations at Once</h2>
                <p>Speed up the process of creating ad campaigns from building <br> various audience segments to filling in multiple creatives parameters. </p>
              </div>
              <ul class="BannerList">
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> A/B test all targeting and creative parameters</li>
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Save hours of time to focus on strategy and creativity.</li>
                <li><img src="../../assets/img/trialBanner/point.webp" alt="point"> Stay organized with UTM tags and ad set naming convention</li>
              </ul>
              <div class="BannerForm">
                <button @click="redirectTo()" class="primaryBtn">Try for free</button>
              </div>
            </div>
            <div class="BannerImage">
              <img src="../../assets/img/trialBanner/picture2.webp" alt="Create multiple ad variations at once">
            </div>
          </div>
        </section>
        <section class="Trial">
          <div class="TrialContainer">
            <div class="TrialImage">
              <img style="max-width: 690px" src="../../assets/img/trialReports/picture2.webp" alt="Find what affects the performance">
            </div>
            <div class="TrialText">
              <div class="TrialTitle">
                <h2>Find what Affects the Performance</h2>
                <p>Identify the most profitable targeting options and creative parameters</p>
              </div>
              <div class="TrialItems">
                <div class="TrialItemsItem">
                  <img src="../../assets/img/trialReports/target.svg" alt="target">
                  <p>Find your top <br> audience</p>
                </div>
                <div class="TrialItemsItem">
                  <img src="../../assets/img/trialReports/line.svg" alt="line">
                  <p>Discover new ways to <br> improve your ads KPIs</p>
                </div>
                <div class="TrialItemsItem">
                  <img src="../../assets/img/trialReports/comment.svg" alt="comment">
                  <p>Stay up-to-date with <br> messenger alerts</p>
                </div>
              </div>
              <div class="TrialForm">
                <button @click="redirectTo()" class="primaryBtn">Try it free</button>
              </div>
            </div>
          </div>
        </section>
        <section class="Trial">
          <div class="TrialContainer">
            <div class="TrialText">
              <div class="TrialTitle">
                <h2>Set Your Ads on Autopilot</h2>
                <p>Just set performance conditions once and watch your ROAS increase even while you are away.</p>
              </div>
              <div class="TrialReports">
                <div class="TrialReportsReport">
                  <h4>Scale</h4>
                  <p>your multiple Facebook ads based on <br> real-time performance metrics</p>
                </div>
                <div class="TrialReportsReport">
                  <h4>Utilize</h4>
                  <p>ready-to-use strategies to reach the <br> best results possible</p>
                </div>
                <div class="TrialReportsReport">
                  <h4>Maximize</h4>
                  <p>the efficiency of automated <br> strategies using real-time triggers</p>
                </div>
              </div>
              <div class="TrialForm">
                <button @click="redirectTo()" class="primaryBtn">Try for free</button>
              </div>
            </div>
            <div class="TrialImage">
              <img src="../../assets/img/trialAds/picture2.webp" alt="Set your Ads on autopilot">
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
        </section>                        <!-- v   Reviews    v -->
        <TrialForm/>
      </main>
    </template>
  </LandingLayout>
</template>
<script>
  export default {
    name: 'FacebookAdsCreation',
    head() {
      return {
        title: 'ConvertBomb | Efficiently Manage Your Digital Marketing',
        meta: [
          {
            hid: '',
            name: 'description',
            content: ``
          }
        ]
      }
    },
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
