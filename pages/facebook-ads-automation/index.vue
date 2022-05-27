<template>
  <LandingLayout>
    <template>
      <section class="Slide" style="background: linear-gradient(102.66deg, #7B6FED 0%, #5348BD 56.04%)">
        <div class="SlideContainer">
          <div class="SlideContainerText">
            <div class="SlideContainerTextWrap">
              <h1>Bring Facebook ads <br>Automation to the Next Level</h1>
              <p class="--light">Optimize your Facebook ad campaigns and <br> generate more sales for your business </p>
            </div>
            <form class="EmailForm">
              <input v-model="email" placeholder="Email address" type="text">
              <button type="button" @click="redirectTo()" class="--light">Start free</button>
            </form>
          </div>
          <div class="SlideContainerImage">
            <img src="../../assets/img/slide/picture.webp" alt="Slide Picture">
          </div>
        </div>
      </section>
      <main class="MainLayoutMain">
        <section class="Pros">
          <div class="ProsContainer">
            <div class="ProsTitle">
              <h2>Automations Take a Load of Work <br> Off Your Shoulders</h2>
              <p>Convertbomb will keep an eye on your ads performance so that you don't miss on important performance changes 24/7</p>
            </div>
            <div class="ProsItems">
              <div class="ProsItem">
                <img class="ProsItemImage" src="../../assets/img/pros/todolist.svg" alt="Create in Bulk">
                <h5>Automate Routines</h5>
                <p>Automate any action that can be taken on your <br> ads to optimize them with a more intuitive <br> version of Facebook automated rules.</p>
              </div>
              <div class="ProsDivider"></div>
              <div class="ProsItem">
                <img class="ProsItemImage" src="../../assets/img/pros/watch.svg" alt="Automate Routines">
                <h5>Save Time Spent in Ads Manager</h5>
                <p>Spare yourself the need to constantly <br> monitor your ads 24/7 while keeping them <br> at the top of their performance.</p>
              </div>
              <div class="ProsDivider"></div>
              <div class="ProsItem">
                <img class="ProsItemImage" src="../../assets/img/pros/stats.svg" alt="Expand Your Targeting">
                <h5>Make Management Easier</h5>
                <p>Connect multiple Ad accounts to create <br> automated rules for different projects and <br> manage all your ad campaigns in one place.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="Banner">
          <div class="BannerContainer">
            <div class="BannerText">
              <div class="BannerTitle">
                <img src="../../assets/img/trialBanner/timer.svg" alt="timer">
                <h2>Quick Start with Pre-Built <br> Automation Strategies</h2>
                <p>Use list of prebuilt strategies based on real data <br> from ad experts’ experience to benefit from tested <br> tactics and improve your Facebook ad results.</p>
              </div>
              <div class="BannerForm">
                <button @click="redirectTo()" class="primaryBtn">Try for free</button>
              </div>
            </div>
            <div class="BannerImage">
              <img src="../../assets/img/trialBanner/picture.webp" alt="trial banner picture" style="max-width: min(100%, 744px)">
            </div>
          </div>
        </section>
        <section class="Tools">
          <div class="ToolsTitle">
            <h2>The Most Flexible & Configurable ad <br> Automation Tool for Facebook</h2>
          </div>
          <div class="ToolsContainer">
            <div class="ToolsContainerColumn">
              <div class="ToolsContainerItem">
                <img src="../../assets/img/tools/monitor.svg" alt="Simple interface">
                <p class="ToolsContainerItemTitle">Simple Interface</p>
                <p>Set up rules quickly with an <br> intuitive interface</p>
              </div>
              <div class="ToolsContainerHorizontal"></div>
              <div class="ToolsContainerItem">
                <img src="../../assets/img/tools/upList.svg" alt="Automation Logs">
                <p class="ToolsContainerItemTitle">Automation Logs</p>
                <p>Learn why a particular rule <br> didn’t work on some items</p>
              </div>
            </div>
            <div class="ToolsContainerVertical"></div>
            <div class="ToolsContainerColumn">
              <div class="ToolsContainerItem">
                <img src="../../assets/img/tools/path.svg" alt="Combining actions">
                <p class="ToolsContainerItemTitle">Combining Actions</p>
                <p>Combine multiple actions <br> inside one automation tactic</p>
              </div>
              <div class="ToolsContainerHorizontal"></div>
              <div class="ToolsContainerItem">
                <img src="../../assets/img/tools/calendar.svg" alt="Custom schedule">
                <p class="ToolsContainerItemTitle">Custom Schedule</p>
                <p>Set the most profitable time for <br> your ads to run</p>
              </div>
            </div>
            <div class="ToolsContainerVertical"></div>
            <div class="ToolsContainerColumn">
              <div class="ToolsContainerItem">
                <img src="../../assets/img/tools/metric.svg" alt="Metric comparisons">
                <p class="ToolsContainerItemTitle">Metric Comparison</p>
                <p>Compare one metric to another <br> for the selected timeframe</p>
              </div>
              <div class="ToolsContainerHorizontal"></div>
              <div class="ToolsContainerItem">
                <img src="../../assets/img/tools/bell.svg" alt="Notification">
                <p class="ToolsContainerItemTitle">Notification</p>
                <p>Get notification about triggered <br> rules sent to your email </p>
              </div>
            </div>
            <div class="ToolsContainerVertical"></div>
            <div class="ToolsContainerColumn">
              <div class="ToolsContainerItem">
                <img src="../../assets/img/tools/custom.svg" alt="Custom metrics">
                <p class="ToolsContainerItemTitle">Custom Metrics</p>
                <p>Create custom metrics to tailor <br> conditions to your needs</p>
              </div>
              <div class="ToolsContainerHorizontal"></div>
              <div class="ToolsContainerItem">
                <img src="../../assets/img/tools/touch.svg" alt="Immediate actions">
                <p class="ToolsContainerItemTitle">Immediate Actions</p>
                <p>Get real-time reactions for most <br> of the metrics</p>
              </div>
            </div>
          </div>
        </section>
        <section class="Banner">
          <div class="BannerHeader">
            <h2>Create Ads in Bulk and Keep the Best-<br>Performing Ones</h2>
            <p>Use Bulk creation to upload headlines, copies and images <br> in bulk and generate dozens of ad variations.</p>
          </div>
          <div class="BannerContainer trialAds__container" style="background: #F8F9FB; margin-top: 40px">
            <div class="BannerAds">
              <div class="BannerAdsColumn">
                <div class="BannerAdsColumnAd">
                  <h4>A/B test All Elements</h4>
                  <p>Test and compare the performance <br> of ads on different audiences</p>
                </div>
                <div class="BannerAdsColumnAd">
                  <h4>Tag Everything</h4>
                  <p>Add UTM tags to your ads <br> and control naming conditions</p>
                </div>
                <div class="container__bold__text__btn">
                  <button @click="redirectTo()" class="primaryBtn">Try for free</button>
                </div>
              </div>
              <div class="BannerAdsColumn">
                <div class="BannerAdsColumnAd">
                  <h4>Save Time Creating Ads</h4>
                  <p>Create up to 50 ad variations <br> in a few minutes</p>
                </div>
                <div class="BannerAdsColumnAd">
                  <h4>Control Your Progress</h4>
                  <p>Monitor your ad performance with a <br> custom dashboard</p>
                </div>
              </div>
            </div>
            <div class="BannerImage">
              <img src="../../assets/img/trialAds/picture.webp" style="max-width: min(719px, 100%)" alt="Create ads in bulk and keep the best-performing ones">
            </div>
          </div>
        </section>
        <section class="Trial">  <!-- v TrialReports v -->
          <div class="TrialContainer">
            <div class="TrialImage">
              <img src="../../assets/img/trialReports/picture.webp" alt="Explore ways to improve your ad performance with automated reports on KPIs ">
            </div>
            <div class="TrialText">
              <div class="TrialTitle">
                <h2>Explore Ways to Improve Your Ad <br> Performance with Automated <br> Reports on KPIs </h2>
                <p>Use Bulk creation to upload headlines, copies and images <br> in bulk and generate dozens of ad variations.</p>
              </div>
              <div class="TrialReports">
                <div class="TrialReportsReport">
                  <h4>Stay Up-to-Date with Changes</h4>
                  <p>Get ad reports sent to email of your <br> team members or clients</p>
                </div>
                <div class="TrialReportsReport">
                  <h4>Share Ad Performance Reports</h4>
                  <p>Customize performance dashboards <br> to show off your ad results </p>
                </div>
                <div class="TrialReportsReport">
                  <h4>Discover the Best Audiences</h4>
                  <p>Analyze the performance of different <br> groups of audiences</p>
                </div>
                <div class="TrialReportsReport">
                  <h4>Creative Performance</h4>
                  <p>Compare how a headline, a copy or <br> an image is perceived by an audience  </p>
                </div>
              </div>
              <div class="TrialForm">
                <button @click="redirectTo()" class="primaryBtn">Try for free</button>
              </div>
            </div>
          </div>
        </section>                      <!-- ^ TrialReports ^ -->
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
                  <p>We’ve been using ConvertBomb for a month <no></no>w and it’s a real catch. A/B testing ad campaigns is crucial and with ConvertBomb it’s also super easy.</p>
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
                    <img src="/assets/img/reviews/Bob4.webp" alt="Naomi Jones">
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
    name: 'FacebookAdsAutomation',
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
