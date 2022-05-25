<template>
  <div>
<!--    <div v-html="article.data.attributes.body"></div>-->
<!--    <Header></Header>-->
    <LandingLayout>
      <template>
        <section class="Slide">
          <div class="SlideContainer">
            <div class="SlideContainerText">
              <div class="SlideContainerTextWrap">
                <h1>Automate Your<br>
                  Ads Management</h1>
                <p class="--light">Optimize your ad campaigns using technologies and<br> marketing specialists’ experience to maximize your results.</p>
              </div>
              <form class="EmailForm">
                <input v-model="email" placeholder="Email address" type="text">
                <button @click="redirectTo()"
                        type="button"
                        class="--light">Start free</button>
              </form>
            </div>
            <div class="SlideContainerImage">
              <img style="margin-top: 40px; max-width: min(100%, 957px)" src="../assets/img/slide/main.webp" alt="Digital Marketing Platform for Beginners and Professionals">
            </div>
          </div>
        </section>
        //= ../html-modules/social-block.html
        <main class="MainLayoutMain">
          <section class="Pros">
            <div class="ProsContainer">
              <div class="ProsTitle">
                <h2>Always-on campaign monitoring<br> and optimization rules</h2>
                <p>Drop the manual work and gain more time to focus on strategy and creativity. </p>
              </div>
              <div class="ProsItems">
                <div class="ProsItem">
                  <img class="ProsItemImage" src="../assets/img/pros/watch.svg" alt="Create in Bulk">
                  <h5>Save Your Time and Money</h5>
                  <p>Spare yourself the need to constantly monitor your ads<br> while keeping them at the top of their performance.</p>
                </div>
                <div class="ProsDivider"></div>
                <div class="ProsItem">
                  <img class="ProsItemImage" src="../assets/img/pros/automated.svg" alt="Automate Routines">
                  <h5>Immediately Reacts to Any Changes</h5>
                  <p>Set your ad account on auto-pilot and don't miss out<br> on any important ad performance changes 24/7.</p>
                </div>
                <div class="ProsDivider"></div>
                <div class="ProsItem">
                  <img class="ProsItemImage" src="../assets/img/automations-take-new-land/cup.svg" alt="Expand Your Targeting">
                  <h5>Apply Best Practices</h5>
                  <p>Use the list of prebuilt strategies based on ad<br>
                    experts’ experience to benefit from proven tactics.</p>
                </div>
              </div>
            </div>
          </section>
          <section class="Banner">
            <div class="BannerContainer">
              <div class="BannerText">
                <div class="BannerTitle">
                  <h2>Spend Less Time on<br class="only-desktop-br"> Ads Management</h2>
                  <p>Configure powerful automation rules to handle<br>even the most complex optimization scenarios.</p>
                </div>
                <div class="BannerItems">
                  <div class="BannerItem">
                    <img class="BannerItemImage" src="../assets/img/main/iconAutomate.svg" alt="Automate routines">
                    <h5>Automate routines</h5>
                    <p>Focus on what really matters,
                      <br> like strategy and  creatives.</p>
                  </div>
                  <div class="BannerItem">
                    <img class="BannerItemImage" src="../assets/img/main/iconScale.svg" alt="Scale campaigns profitably">
                    <h5>Scale campaigns profitably</h5>
                    <p>Scale your campaigns to new heights without increasing workload.</p>
                  </div>
                </div>
              </div>
              <div class="BannerImage">
                <img src="../assets/img/main/banner0.webp" style="max-width: min(755px, 100%); width: auto" alt="Bring Facebook Ads Automation to the Next Level">
              </div>
            </div>
          </section>
          <section class="Tools">
            <div class="ToolsTitle">
              <h2>The Most Flexible & Configurable <br> Ad Automation Tool</h2>
            </div>
            <div class="ToolsContainer">
              <div class="ToolsContainerColumn">
                <div class="ToolsContainerItem">
                  <img src="../assets/img/tools/monitor.svg" alt="Simple interface">
                  <p class="ToolsContainerItemTitle">Simple Interface</p>
                  <p>Set up rules quickly with an <br> intuitive interface</p>
                </div>
                <div class="ToolsContainerHorizontal"></div>
                <div class="ToolsContainerItem">
                  <img src="../assets/img/tools/upList.svg" alt="Automation Logs">
                  <p class="ToolsContainerItemTitle">Automation Logs</p>
                  <p>Learn why a particular rule <br> didn’t work on some items</p>
                </div>
              </div>
              <div class="ToolsContainerVertical"></div>
              <div class="ToolsContainerColumn">
                <div class="ToolsContainerItem">
                  <img src="../assets/img/tools/path.svg" alt="Combining actions">
                  <p class="ToolsContainerItemTitle">Combining Actions</p>
                  <p>Combine multiple actions <br> inside one automation tactic</p>
                </div>
                <div class="ToolsContainerHorizontal"></div>
                <div class="ToolsContainerItem">
                  <img src="../assets/img/tools/calendar.svg" alt="Custom schedule">
                  <p class="ToolsContainerItemTitle">Custom Schedule</p>
                  <p>Set the most profitable time for <br> your ads to run</p>
                </div>
              </div>
              <div class="ToolsContainerVertical"></div>
              <div class="ToolsContainerColumn">
                <div class="ToolsContainerItem">
                  <img src="../assets/img/tools/metric.svg" alt="Metric comparisons">
                  <p class="ToolsContainerItemTitle">Metric Comparison</p>
                  <p>Compare one metric to another <br> for the selected timeframe</p>
                </div>
                <div class="ToolsContainerHorizontal"></div>
                <div class="ToolsContainerItem">
                  <img src="../assets/img/tools/bell.svg" alt="Notification">
                  <p class="ToolsContainerItemTitle">Notification</p>
                  <p>Get notifications about triggered <br> rules sent to your email </p>
                </div>
              </div>
              <div class="ToolsContainerVertical"></div>
              <div class="ToolsContainerColumn">
                <div class="ToolsContainerItem">
                  <img src="../assets/img/tools/custom.svg" alt="Custom metrics">
                  <p class="ToolsContainerItemTitle">Custom Metrics</p>
                  <p>Create custom metrics to tailor <br> conditions to your needs</p>
                </div>
                <div class="ToolsContainerHorizontal"></div>
                <div class="ToolsContainerItem">
                  <img src="../assets/img/tools/touch.svg" alt="Immediate actions">
                  <p class="ToolsContainerItemTitle">Immediate Actions</p>
                  <p>Get real-time reactions for most <br> of the metrics</p>
                </div>
              </div>
            </div>
          </section>
          <section class="Trial">
            <div class="TrialContainer" style="align-items: flex-start">
              <div class="TrialImage">
                <img src="../assets/img/main/trial0.webp" alt="Automations Take a Load of Work Off Your Shoulders">
              </div>
              <div class="TrialText">
                <div class="TrialTitle">
                  <h2>Set Ads Management<br>on Autopilot</h2>
                  <p>ConvertBomb keeps an eye on your ads performance so that<br>
                    you don't miss out on important performance changes 24/7</p>
                </div>
                <div class="TrialList">
                  <div class="TrialListItem">
                    <img src="../assets/img/trialBanner/check.svg" alt="Quick start with pre-built automation strategies">
                    <p>Pause underperforming ads</p>
                  </div>
                  <div class="TrialListItem">
                    <img src="../assets/img/trialBanner/check.svg" alt="Real-time reactions for most of the metrics">
                    <p>Increase budget for campaigns that convert</p>
                  </div>
                  <div class="TrialListItem">
                    <img src="../assets/img/trialBanner/check.svg" alt="AI precision budget optimization">
                    <p>Combine rules to create personalized strategies</p>
                  </div>
                </div>
                <!--                    <div class="TrialForm">-->
                <!--                        <button @click="redirectTo()" class="primaryBtn">-->
                <!--                            Try for free-->
                <!--                        </button>-->
                <!--                        <a href="/facebook-ads-automation">Learn more <span style="opacity: 0">about Automated Rules</span></a>-->
                <!--                    </div>-->
              </div>
            </div>
          </section>
          <!--        <section class="Banner">-->
          <!--            <div class="BannerContainer">-->
          <!--                <div class="BannerText">-->
          <!--                    <div class="BannerTitle">-->
          <!--                        <h2>Launch Profitable Facebook-->
          <!--                            <br> Ad Campaigns in Less Time</h2>-->
          <!--                        <p>Find the right combination of audience and creative-->
          <!--                            <br> with advanced split testing and optimization.</p>-->
          <!--                    </div>-->
          <!--                    <div class="BannerItems">-->
          <!--                        <div class="BannerItem">-->
          <!--                            <img class="BannerItemImage" src="../../assets/img/main/iconTarget.svg" alt="Create in bulk">-->
          <!--                            <h5>Create in bulk</h5>-->
          <!--                            <p>Create thousands of ads in a matter-->
          <!--                                <br> of minutes multiplying different ad-->
          <!--                                <br> variations. </p>-->
          <!--                        </div>-->
          <!--                        <div class="BannerItem">-->
          <!--                            <img class="BannerItemImage" src="../../assets/img/main/iconReport.svg" alt="Discover insights">-->
          <!--                            <h5>Discover insights</h5>-->
          <!--                            <p>Easily identify factors affecting ads-->
          <!--                                <br> performance the most.</p>-->
          <!--                        </div>-->
          <!--                    </div>-->
          <!--                </div>-->
          <!--                <div class="BannerImage">-->
          <!--                    <img src="../../assets/img/main/banner1.webp" style="max-width: min(610px, 100%)" alt="Launch Profitable Facebook Ad Campaigns in Less Time">-->
          <!--                </div>-->
          <!--            </div>-->
          <!--        </section>-->
          <!--        <section class="Trial">-->
          <!--            <div class="TrialContainer">-->
          <!--                <div class="TrialImage">-->
          <!--                    <img src="../../assets/img/main/trial1.webp" style="max-width: min(717px, 100%)" alt="Create Multiple Ad Variations at Once">-->
          <!--                </div>-->
          <!--                <div class="TrialText">-->
          <!--                    <div class="TrialTitle">-->
          <!--                        <h2>Create Multiple Ad Variations at Once</h2>-->
          <!--                        <p>Find the right combination of audience and creative with advanced-->
          <!--                            <br> split testing and optimization.</p>-->
          <!--                    </div>-->
          <!--                    <div class="TrialList">-->
          <!--                        <div class="TrialListItem">-->
          <!--                            <img src="../../assets/img/trialBanner/check.svg" alt="A/B test all targeting and creative parameters">-->
          <!--                            <p>A/B test all targeting and creative parameters</p>-->
          <!--                        </div>-->
          <!--                        <div class="TrialListItem">-->
          <!--                            <img src="../../assets/img/trialBanner/check.svg" alt="Access accurate and always up-to-date advertising benchmarks">-->
          <!--                            <p>Access accurate and always up-to-date advertising benchmarks</p>-->
          <!--                        </div>-->
          <!--                        <div class="TrialListItem">-->
          <!--                            <img src="../../assets/img/trialBanner/check.svg" alt="Invest more in the most performing ads">-->
          <!--                            <p>Invest more in the most performing ads</p>-->
          <!--                        </div>-->
          <!--                    </div>-->
          <!--                    <div class="TrialForm">-->
          <!--                        <button class="primaryBtn" @click="redirectTo()">Try for free</button>-->
          <!--                        <a href="/facebook-ads-targeting">Learn more <span style="opacity: 0">about Interest Targeting</span></a>-->
          <!--                    </div>-->
          <!--                </div>-->
          <!--            </div>-->
          <!--        </section>-->
          <section class="Banner">
            <div class="BannerContainer">
              <div class="BannerText">
                <div class="BannerTitle">
                  <h2>Adopt Strategies Built <br class="only-desktop-br">by Marketing Experts</h2>
                  <p>Gain competitive advantage by applying result-<br>oriented set of rules to your ad campaigns. Let best<br>
                    digital marketing practices and algorithms work<br>together to scale your real life success.
                  </p>
                </div>
              </div>
              <div class="BannerImage">
                <img src="../assets/img/adopt-strategies-new-land/adopt.webp" alt="Create multiple ad variations at once">
              </div>
            </div>
          </section>
          //= ../html-modules/faq.html
          <!--        //= ../html-modules/plans.html-->
          //= ../html-modules/trial-form-main.html
        </main>
      </template>
    </LandingLayout>
    <client-only>
      <modal name="example">This is an example</modal>
    </client-only>
<!--    <client-only :placeholder="'Loading...'">-->
<!--      <agile :initial-slide="1"-->
<!--             :slidesToShow="3"-->
<!--             :centerMode="true">-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1529815481058-55e5b656f6d6?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>-->
<!--        <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>-->
<!--      </agile>-->
<!--    </client-only>-->
    <div>
      <button class="form-button green">
        <span>Start free</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'test name',
        val: 1
      }
    },
    async asyncData({ $axios, $config }) {
      const list = await $axios.$get(`webapi/v2/contact-us-categories`)
      return { list }
    },
    methods: {
      show () {
        this.$modal.show('example')
      }
    },
    mounted () {
      this.$modal.show('example')
    }
  }
</script>
<style lang="sass">
  // VueAgile styles
  .agile
    &__nav-button
      background: transparent
      border: none
      color: #fff
      cursor: pointer
      font-size: 24px
      height: 100%
      position: absolute
      top: 0
      transition-duration: .3s
      width: 80px

      &:hover
        background-color: rgba(#000, .5)
        opacity: 1

      &--prev
        left: 0

      &--next
        right: 0

    &__dots
      bottom: 10px
      left: 50%
      position: absolute
      transform: translateX(-50%)

    &__dot
      margin: 0 10px

      button
        background-color: transparent
        border: 1px solid #fff
        border-radius: 50%
        cursor: pointer
        display: block
        height: 10px
        font-size: 0
        line-height: 0
        margin: 0
        padding: 0
        transition-duration: .3s
        width: 10px

      &--current,
      &:hover
        button
          background-color: #fff

  // Slides styles
  .slide
    display: block
    height: 500px
    object-fit: cover
    width: 100%
</style>
