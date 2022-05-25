<template>
  <LandingLayout>
    <template>
      <main class="privacy-wrapper">
        <div class="privacy-first-block">
          <div class="privacy-first-block-container">
            <div class="image">
              <div class="icon">
                <img src="../../assets/img/privacy/lock.svg" alt="">
              </div>
              <div class="text">
                <p>Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
        <div class="privacy privacy-container">
          <div class="navigation-field">
            <ul class="navigation-field-list" style="max-width: 335px">
              <li class="navigation-field-list-item"
                  :class="{ active: coords['first'] === Math.min(...Object.values(coords)) || !coords['first'] }"
                  @click="scrollTo('first')">
                <a> Agreement to terms</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['second'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('second')">
                <a>Intellectual property rights</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['third'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('third')">
                <a>User representations</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['fourth'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('fourth')">
                <a>User registration</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['fifth'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('fifth')">
                <a>Fees and payment</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['sixth'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('sixth')">
                <a>Cancellation</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['seventh'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('seventh')">
                <a>Prohibited activities</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['eighth'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('eighth')">
                <a>User generated contributions</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['nine'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('nine')">
                <a>Contribution license</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['ten'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('ten')">
                <a>Submissions</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['eleven'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('eleven')">
                <a>Site management</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['twelve'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('twelve')">
                <a>Term and termination</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['thirteen'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('thirteen')">
                <a>Modifications and interruptions</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['fourteen'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('fourteen')">
                <a>Corrections</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['fifteen'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('fifteen')">
                <a>Disclaimer</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['sixteen'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('sixteen')">
                <a>Limitations of liability</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['seventeen'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('seventeen')">
                <a>Indemnification</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['eighteen'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('eighteen')">
                <a>User data</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['nineteen'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('nineteen')">
                <a>Miscellaneous</a>
              </li>
            </ul>
          </div>
          <div class="canvas-field">
            <div class="text-block" id="first">
              <div class="text-block-title">
                <h3>Agreement to terms</h3>
              </div>
              <div class="text-block-content">
                <p>These Terms of Use constitute a legally binding agreement made between you, whether
                  personally or on behalf of an entity (“you”) and ConvertBomb ("Company", “we”, “us”, or
                  “our”), concerning your access to and use of the convertbomb.com website as well as any
                  other media form, media channel, mobile website or mobile application related, linked, or
                  otherwise connected thereto (collectively, the “Site”). You agree that by accessing the
                  Site, you have read, understood, and agree to be bound by all of these Terms of Use.</p>
                <p>Supplemental terms and conditions or documents that may be posted on the Site from time to
                  time are hereby expressly incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these Terms of Use from time to time.
                  We will alert you about any changes by updating the “Last updated” date of these Terms of
                  Use, and you waive any right to receive specific notice of each such change. Please ensure
                  that you check the applicable Terms every time you use our Site so that you understand which
                  Terms apply. You will be subject to, and will be deemed to have been made aware of and to
                  have accepted, the changes in any revised Terms of Use by your continued use of the Site
                  after the date such revised Terms of Use are posted.</p>
                <p>The information provided on the Site is not intended for distribution to or use by any person
                  or entity in any jurisdiction or country where such distribution or use would be contrary to
                  law or regulation or which would subject us to any registration requirement within such
                  jurisdiction or country. Accordingly, those persons who choose to access the Site from other
                  locations do so on their own initiative and are solely responsible for compliance with local
                  laws, if and to the extent local laws are applicable.</p>
                <p>All users who are minors in the jurisdiction in which they reside (generally under the age of
                  18) must have the permission of, and be directly supervised by, their parent or guardian to
                  use the Site. If you are a minor, you must have your parent or guardian read and agree to
                  these Terms of Use prior to you using the Site.</p>
              </div>
            </div>
            <div class="text-block" id="second">
              <div class="text-block-title">
                <h3>Intellectual property rights</h3>
              </div>
              <div class="text-block-content">
                <p>Unless otherwise indicated, the Site is our proprietary property and all source code,
                  databases, functionality, software, website designs, audio, video, text, photographs, and
                  graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and
                  logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and
                  are protected by copyright and trademark laws and various other intellectual property rights
                  and unfair competition laws of the United States, international copyright laws, and
                  international conventions. The Content and the Marks are provided on the Site “AS IS” for
                  your information and personal use only.</p>
                <p>Provided that you are eligible to use the Site, you are granted a limited license to access
                  and use the Site and to download or print a copy of any portion of the Content to which you
                  have properly gained access solely for your personal, non-commercial use. We reserve all
                  rights not expressly granted to you in and to the Site, the Content and the Marks.</p>
              </div>
            </div>
            <div class="text-block" id="third">
              <div class="text-block-title">
                <h3>User representations</h3>
              </div>
              <div class="text-block-content">
                <p>By using the Site, you represent and warrant that: (1) all registration information you
                  submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of
                  such information and promptly update such registration information as necessary; (3) you
                  have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a
                  minor in the jurisdiction in which you reside, or if a minor, you have received parental
                  permission to use the Site; (5) you will not access the Site through automated or non-human
                  means, whether through a bot, script or otherwise; (6) you will not use the Site for any
                  illegal or unauthorized purpose; and (7) your use of the Site will not violate any
                  applicable law or regulation.</p>
                <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we
                  have the right to suspend or terminate your account and refuse any and all current or future
                  use of the Site (or any portion thereof).</p>
              </div>
            </div>
            <div class="text-block" id="fourth">
              <div class="text-block-title">
                <h3>User registration</h3>
              </div>
              <div class="text-block-content">
                <p>You may be required to register with the Site. You agree to keep your password confidential
                  and will be responsible for all use of your account and password. We reserve the right to
                  remove, reclaim, or change a username you select if we determine, in our sole discretion,
                  that such username is inappropriate, obscene, or otherwise objectionable.</p>
              </div>
            </div>
            <div class="text-block" id="fifth">
              <div class="text-block-title">
                <h3>Fees and payment</h3>
              </div>
              <div class="text-block-content">
                <p>You may be required to purchase or pay a fee to access some of our services. You agree to
                  provide current, complete, and accurate purchase and account information for all purchases
                  made via the Site. You further agree to promptly update account and payment information,
                  including email address, payment method, and payment card expiration date, so that we can
                  complete your transactions and contact you as needed. We bill you through an online billing
                  account for purchases made via the Site. We may change prices at any time. All payments
                  shall be in U.S. dollars.</p>
                <p>You agree to pay all charges or fees at the prices then in effect for your purchases, and you
                  authorize us to charge your chosen payment provider for any such amounts upon making your
                  purchase. If your purchase is subject to recurring charges, then you consent to our charging
                  your payment method on a recurring basis without requiring your prior approval for each
                  recurring charge, until you notify us of your cancellation.</p>
                <p>We reserve the right to correct any errors or mistakes in pricing, even if we have already
                  requested or received payment. We also reserve the right to refuse any order placed through
                  the Site.</p>
              </div>
            </div>
            <div class="text-block" id="sixth">
              <div class="text-block-title">
                <h3>Cancellation</h3>
              </div>
              <div class="text-block-content">
                <p>All purchases are non-refundable. You can cancel your subscription at any time by logging
                  into your account. Your cancellation will take effect at the end of the current paid
                  term.</p>
              </div>
            </div>
            <div class="text-block" id="seventh">
              <div class="text-block-title">
                <h3>PROHIBITED ACTIVITIES</h3>
              </div>
              <div class="text-block-content">
                <p>You may not access or use the Site for any purpose other than that for which we make the Site
                  available. The Site may not be used in connection with any commercial endeavors except those
                  that are specifically endorsed or approved by us.</p>
              </div>
              <div class="list-block-title">
                <h4>As a user of the Site, you agree not to:</h4>
              </div>
              <div class="list-block-content">
                <ul>
                  <li>
                    <p> Systematically retrieve data or other content from the Site to create or compile,
                      directly or indirectly, a collection, compilation, database, or directory without
                      written permission from us.</p>
                  </li>
                  <li>
                    <p> Trick, defraud, or mislead us and other users, especially in any attempt to learn
                      sensitive account information such as user passwords.</p>
                  </li>
                  <li>
                    <p>Circumvent, disable, or otherwise interfere with security-related features of the
                      Site, including features that prevent or restrict the use or copying of any Content
                      or enforce limitations on the use of the Site and/or the Content contained
                      therein.</p>
                  </li>
                  <li>
                    <p>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</p>
                  </li>
                  <li>
                    <p>Use any information obtained from the Site in order to harass, abuse, or harm another
                      person.</p>
                  </li>
                  <li>
                    <p> Make improper use of our support services or submit false reports of abuse or
                      misconduct.</p>
                  </li>
                  <li>
                    <p>Use the Site in a manner inconsistent with any applicable laws or regulations.</p>
                  </li>
                  <li>
                    <p>Engage in unauthorized framing of or linking to the Site.</p>
                  </li>
                  <li>
                    <p>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or
                      other material, including excessive use of capital letters and spamming (continuous
                      posting of repetitive text), that interferes with any party’s uninterrupted use and
                      enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the
                      use, features, functions, operation, or maintenance of the Site.</p>
                  </li>
                  <li>
                    <p> Engage in any automated use of the system, such as using scripts to send comments or
                      messages, or using any data mining, robots, or similar data gathering and extraction
                      tools.</p>
                  </li>
                  <li>
                    <p>Delete the copyright or other proprietary rights notice from any Content.</p>
                  </li>
                  <li>
                    <p>Attempt to impersonate another user or person or use the username of another
                      user.</p>
                  </li>
                  <li>
                    <p>Upload or transmit (or attempt to upload or to transmit) any material that acts as a
                      passive or active information collection or transmission mechanism, including
                      without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web
                      bugs, cookies, or other similar devices (sometimes referred to as “spyware” or
                      “passive collection mechanisms” or “pcms”).</p>
                  </li>
                  <li>
                    <p>Interfere with, disrupt, or create an undue burden on the Site or the networks or
                      services connected to the Site.</p>
                  </li>
                  <li>
                    <p>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in
                      providing any portion of the Site to you.</p>
                  </li>
                  <li>
                    <p>Attempt to bypass any measures of the Site designed to prevent or restrict access to
                      the Site, or any portion of the Site.</p>
                  </li>
                  <li>
                    <p>Copy or adapt the Site’s software, including but not limited to PHP, HTML,
                      JavaScript, or other code.</p>
                  </li>
                  <li>
                    <p>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse
                      engineer any of the software comprising or in any way making up a part of the
                      Site.</p>
                  </li>
                  <li>
                    <p>Except as may be the result of standard search engine or Internet browser usage, use,
                      launch, develop, or distribute any automated system that accesses the Site, or using
                      or launching any unauthorized script or other software.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-block" id="eighth">
              <div class="text-block-title">
                <h3>User generated contributions</h3>
              </div>
              <div class="text-block-content">
                <p>Any Contributions you transmit may be treated in accordance with the Site Privacy Policy.
                  When you create or make available any Contributions, you thereby represent and warrant
                  that:</p>
                <p>The creation, distribution, transmission, public display, or performance, and the accessing,
                  downloading, or copying of your Contributions do not and will not infringe the proprietary
                  rights, including but not limited to the copyright, patent, trademark, trade secret, or
                  moral rights of any third party.</p>
                <p>You are the creator and owner of or have the necessary licenses, rights, consents, releases,
                  and permissions to use and to authorize us, the Site, and other users of the Site to use
                  your Contributions in any manner contemplated by the Site and these Terms of Use.</p>
                <p>You have the written consent, release, and/or permission of each and every identifiable
                  individual person in your Contributions to use the name or likeness of each and every such
                  identifiable individual person to enable inclusion and use of your Contributions in any
                  manner contemplated by the Site and these Terms of Use.</p>
                <p>Your Contributions are not false, inaccurate, or misleading.</p>
                <p>Your Contributions are not unsolicited or unauthorized advertising, promotional materials,
                  pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</p>
                <p>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous,
                  slanderous, or otherwise objectionable (as determined by us).</p>
                <p>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</p>
                <p>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any
                  other person and to promote violence against a specific person or class of people.</p>
                <p>Your Contributions do not violate any applicable law, regulation, or rule.</p>
                <p>Your Contributions do not violate the privacy or publicity rights of any third party.</p>
                <p>Your Contributions do not violate any applicable law concerning child pornography, or
                  otherwise intended to protect the health or well-being of minors.</p>
                <p>Your Contributions do not include any offensive comments that are connected to race, national
                  origin, gender, sexual preference, or physical handicap.</p>
                <p>Your Contributions do not otherwise violate, or link to material that violates, any provision
                  of these Terms of Use, or any applicable law or regulation.</p>
                <p>Any use of the Site in violation of the foregoing violates these Terms of Use and may result
                  in, among other things, termination or suspension of your rights to use the Site.</p>
              </div>
            </div>
            <div class="text-block" id="nine">
              <div class="text-block-title">
                <h3>Contribution license</h3>
              </div>
              <div class="text-block-content">
                <p>You and the Site agree that we may access, store, process, and use any information and
                  personal data that you provide following the terms of the Privacy Policy and your choices
                  (including settings).</p>
                <p>By submitting suggestions or other feedback regarding the Site, you agree that we can use and
                  share such feedback for any purpose without compensation to you.</p>
                <p>You are solely responsible for your Contributions to the Site and you expressly agree to
                  exonerate us from any and all responsibility and to refrain from any legal action against us
                  regarding your Contributions.</p>
              </div>
            </div>
            <div class="text-block" id="ten">
              <div class="text-block-title">
                <h3>Submissions</h3>
              </div>
              <div class="text-block-content">
                <p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or
                  other information regarding the Site ("Submissions") provided by you to us are
                  non-confidential and shall become our sole property. We shall own exclusive rights,
                  including all intellectual property rights, and shall be entitled to the unrestricted use
                  and dissemination of these Submissions for any lawful purpose, commercial or otherwise,
                  without acknowledgment or compensation to you. You hereby waive all moral rights to any such
                  Submissions, and you hereby warrant that any such Submissions are original with you or that
                  you have the right to submit such Submissions. You agree there shall be no recourse against
                  us for any alleged or actual infringement or misappropriation of any proprietary right in
                  your Submissions.</p>
              </div>
            </div>
            <div class="text-block" id="eleven">
              <div class="text-block-title">
                <h3>Site management</h3>
              </div>
              <div class="text-block-content">
                <p>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of
                  these Terms of Use; (2) take appropriate legal action against anyone who, in our sole
                  discretion, violates the law or these Terms of Use, including without limitation, reporting
                  such user to law enforcement authorities; (3) in our sole discretion and without limitation,
                  refuse, restrict access to, limit the availability of, or disable (to the extent
                  technologically feasible) any of your Contributions or any portion thereof; (4) in our sole
                  discretion and without limitation, notice, or liability, to remove from the Site or
                  otherwise disable all files and content that are excessive in size or are in any way
                  burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect
                  our rights and property and to facilitate the proper functioning of the Site.</p>
              </div>
            </div>
            <div class="text-block" id="twelve">
              <div class="text-block-title">
                <h3>Term and termination</h3>
              </div>
              <div class="text-block-content">
                <p>These Terms of Use shall remain in full force and effect while you use the Site. Without
                  limiting any other provision of these terms of use, we reserve the right to, in our sole
                  discretion and without notice or liability, deny access to and use of the site (including
                  blocking certain ip addresses), to any person for any reason or for no reason, including
                  without limitation for breach of any representation, warranty, or covenant contained in
                  these terms of use or of any applicable law or regulation. We may terminate your use or
                  participation in the site or delete your account and any content or information that you
                  posted at any time, without warning, in our sole discretion.</p>
                <p>If we terminate or suspend your account for any reason, you are prohibited from registering
                  and creating a new account under your name, a fake or borrowed name, or the name of any
                  third party, even if you may be acting on behalf of the third party. In addition to
                  terminating or suspending your account, we reserve the right to take appropriate legal
                  action, including without limitation pursuing civil, criminal, and injunctive redress.</p>
              </div>
            </div>
            <div class="text-block" id="thirteen">
              <div class="text-block-title">
                <h3>Modifications and interruptions</h3>
              </div>
              <div class="text-block-content">
                <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for
                  any reason at our sole discretion without notice. However, we have no obligation to update
                  any information on our Site. We also reserve the right to modify or discontinue all or part
                  of the Site without notice at any time. We will not be liable to you or any third party for
                  any modification, price change, suspension, or discontinuance of the Site.</p>
                <p>We cannot guarantee the Site will be available at all times. We may experience hardware,
                  software, or other problems or need to perform maintenance related to the Site, resulting in
                  interruptions, delays, or errors. We reserve the right to change, revise, update, suspend,
                  discontinue, or otherwise modify the Site at any time or for any reason without notice to
                  you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience
                  caused by your inability to access or use the Site during any downtime or discontinuance of
                  the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and
                  support the Site or to supply any corrections, updates, or releases in connection
                  therewith.</p>
              </div>
            </div>
            <div class="text-block" id="fourteen">
              <div class="text-block-title">
                <h3>Corrections</h3>
              </div>
              <div class="text-block-content">
                <p>There may be information on the Site that contains typographical errors, inaccuracies, or
                  omissions, including descriptions, pricing, availability, and various other information. We
                  reserve the right to correct any errors, inaccuracies, or omissions and to change or update
                  the information on the Site at any time, without prior notice.</p>
              </div>
            </div>
            <div class="text-block" id="fifteen">
              <div class="text-block-title">
                <h3>Disclaimer</h3>
              </div>
              <div class="text-block-content">
                <p>The site is provided on an as-is and as-available basis. You agree that your use of the site
                  and our services will be at your sole risk. To the fullest extent permitted by law, we
                  disclaim all warranties, express or implied, in connection with the site and your use
                  thereof, including, without limitation, the implied warranties of merchantability, fitness
                  for a particular purpose, and non-infringement. We make no warranties or representations
                  about the accuracy or completeness of the site’s content or the content of any websites
                  linked to the site and we will assume no liability or responsibility for any (1) errors,
                  mistakes, or inaccuracies of content and materials, (2) personal injury or property damage,
                  of any nature whatsoever, resulting from your access to and use of the site, (3) any
                  unauthorized access to or use of our secure servers and/or any and all personal information
                  and/or financial information stored therein, (4) any interruption or cessation of
                  transmission to or from the site, (5) any bugs, viruses, trojan horses, or the like which
                  may be transmitted to or through the site by any third party, and/or (6) any errors or
                  omissions in any content and materials or for any loss or damage of any kind incurred as a
                  result of the use of any content posted, transmitted, or otherwise made available via the
                  site. We do not warrant, endorse, guarantee, or assume responsibility for any product or
                  service advertised or offered by a third party through the site, any hyperlinked website, or
                  any website or mobile application featured in any banner or other advertising, and we will
                  not be a party to or in any way be responsible for monitoring any transaction between you
                  and any third-party providers of products or services. As with the purchase of a product or
                  service through any medium or in any environment, you should use your best judgment and
                  exercise caution where appropriate.</p>
              </div>
            </div>
            <div class="text-block" id="sixteen">
              <div class="text-block-title">
                <h3>Limitations of liability</h3>
              </div>
              <div class="text-block-content">
                <p>In no event will we or our directors, employees, or agents be liable to you or any third
                  party for any direct, indirect, consequential, exemplary, incidental, special, or punitive
                  damages, including lost profit, lost revenue, loss of data, or other damages arising from
                  your use of the site, even if we have been advised of the possibility of such damages.</p>
              </div>
            </div>
            <div class="text-block" id="seventeen">
              <div class="text-block-title">
                <h3>Indemnification</h3>
              </div>
              <div class="text-block-content">
                <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates,
                  and all of our respective officers, agents, partners, and employees, from and against any
                  loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and
                  expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach
                  of these Terms of Use; (3) any breach of your representations and warranties set forth in
                  these Terms of Use; (4) your violation of the rights of a third party, including but not
                  limited to intellectual property rights; or (5) any overt harmful act toward any other user
                  of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve
                  the right, at your expense, to assume the exclusive defense and control of any matter for
                  which you are required to indemnify us, and you agree to cooperate, at your expense, with
                  our defense of such claims. We will use reasonable efforts to notify you of any such claim,
                  action, or proceeding which is subject to this indemnification upon becoming aware of
                  it.</p>
              </div>
            </div>
            <div class="text-block" id="eighteen">
              <div class="text-block-title">
                <h3>User data</h3>
              </div>
              <div class="text-block-content">
                <p>We will maintain certain data that you transmit to the Site for the purpose of managing the
                  performance of the Site, as well as data relating to your use of the Site. Although we
                  perform regular routine backups of data, you are solely responsible for all data that you
                  transmit or that relates to any activity you have undertaken using the Site. You agree that
                  we shall have no liability to you for any loss or corruption of any such data, and you
                  hereby waive any right of action against us arising from any such loss or corruption of such
                  data.</p>
              </div>
            </div>
            <div class="text-block" id="nineteen">
              <div class="text-block-title">
                <h3>Miscellaneous</h3>
              </div>
              <div class="text-block-content">
                <p>These Terms of Use and any policies or operating rules posted by us on the Site or in respect
                  to the Site constitute the entire agreement and understanding between you and us. Our
                  failure to exercise or enforce any right or provision of these Terms of Use shall not
                  operate as a waiver of such right or provision. These Terms of Use operate to the fullest
                  extent permissible by law. We may assign any or all of our rights and obligations to others
                  at any time. We shall not be responsible or liable for any loss, damage, delay, or failure
                  to act caused by any cause beyond our reasonable control. If any provision or part of a
                  provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that
                  provision or part of the provision is deemed severable from these Terms of Use and does not
                  affect the validity and enforceability of any remaining provisions. There is no joint
                  venture, partnership, employment or agency relationship created between you and us as a
                  result of these Terms of Use or use of the Site. You agree that these Terms of Use will not
                  be construed against us by virtue of having drafted them. You hereby waive any and all
                  defenses you may have based on the electronic form of these Terms of Use and the lack of
                  signing by the parties hereto to execute these Terms of Use.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>
  </LandingLayout>
</template>
<script>
  export default {
    name: 'Terms',
    data () {
      return {
        ids: [
          'first',
          'second',
          'third',
          'fourth',
          'fifth',
          'sixth',
          'seventh',
          'eighth',
          'nine',
          'ten',
          'eleven',
          'twelve',
          'thirteen',
          'fourteen',
          'fifteen',
          'sixteen',
          'seventeen',
          'eighteen',
          'nineteen'
        ],
        coords: {},
        activeId: 'first',
      }
    },
    methods: {
      scrollTo (acc) {
        this.activeId = acc
        const element = document.getElementById(acc)
        const y = element.getBoundingClientRect().top + window.pageYOffset
        const rect = element.getBoundingClientRect()
        window.scrollTo({ top: y - 70, behavior: 'smooth' })
      },
      onScroll () {
        this.windowTop = window.top.scrollY
        const coords = {}
        this.ids.forEach(id => {
          const element = document.getElementById(id)
          if (element)
          {
            const rect = element.getBoundingClientRect()
            coords[id] = Math.abs(rect.y)
          }
        })
        this.coords = coords
      },
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    }
  }
</script>
<style lang="scss">
  .privacy-first-block {
    background: linear-gradient(102.66deg, #7B6FED 0%, #5348BD 56.04%);
    min-height: 230px!important;
    display: flex;
    align-items: center;
    &-container {
      width: 100%;
      max-width: 1366px;
      margin: auto;
    }
    .image {
      padding: 10px 10px 10px 58px;
      display: flex;
      align-items: center;
      width: 30%;
      font-weight: 500;
      .icon {
        img {
          width: 45px;
        }
      }
      .text {
        padding: 20px;
        p {
          font-family: "SF UI Text", sans-serif;
          font-size: 32px;
          color: #fff;
          line-height: 36px;
          font-weight: 500;
        }
      }
    }
  }
  @media (max-width: 1025px) {
    .privacy-first-block {
      min-width: auto;
      .container__bold {
        min-width: auto;
        .image {
          padding: 50px 30px 110px 30px;
        }
      }
    }
  }

  .privacy-wrapper {
    width: 100%;
    background-color: rgb(248, 249, 251);
    p, h3 , a , h4, span {
      font-family: "SF UI Display",sans-serif;
    }
    .privacy-container {
      max-width: 1366px;
      margin: auto;
      padding: 0 18px;
    }
    .privacy {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      font-family: "SF UI Display", sans-serif;
      position: relative;
      .navigation-field {
        width: 25%;
        position: absolute;
        height: 95%;
        margin-top: -50px;
        font-family: 'SF UI Display', sans-serif;
        &-list {
          position: sticky;
          top: 0;
          max-width: 290px;
          padding-top: 100px;
          width: 90%;
          &-item {
            min-height: 46px;
            display: flex;
            align-items: center;
            margin-bottom: 3px;
            border-left: 3px solid transparent;
            a {
              display: block;
              height: 100%;
              width: 100%;
              line-height: 38px;
              font-size: 16px;
              padding: 4px 20px;
              transition: 0.2s;
              color: #1C2445;
              font-weight: 400;
              @media (max-width: 1367px) {
                font-size: 14px;
              }
            }
            &:hover {
              border-left: 3px solid #F9F9F9;
              a {
                background: #F0F0F0;
              }
            }
          }
          .navigation-field-list-item.active {
            background: #F0F0F0;
            border-left: 3px solid #FF4639;
          }
        }
      }
      .navigation-field-fix {
        position: fixed;
        top: 0;
      }
      .canvas-field {
        width: 75%;
        max-width: 1000px;
        margin-left: auto;
        background: #fff;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 50px;
        margin-top: -70px;
        margin-bottom: 50px;
        .last-update {
          margin-bottom: 15px;
          &-text {
            color: #7c7c7c;
            font-size: 15px;
          }
        }
        .list-block {
          &-title {
            margin-bottom: 25px;
            h4 {
              font-weight: 500;
              font-size: 18px;
              line-height: 24px;
              color: #1C2445;
            }
          }
          &-content {
            padding: 0 0 35px 20px;
            p {
              font-size: 16px;
              line-height: 24px;
              color: #4E4E4E
            }
            ul {
              li {
                display: flex;
                align-items: flex-start;
                &:not(:last-child) {
                  margin-bottom: 25px;
                }
                span {
                  padding: 0 15px 0 0;
                  font-weight: 500;
                  line-height: 24px;
                  font-size: 18px;
                }
                p {
                  font-size: 16px;
                  line-height: 24px;
                  color: #4E4E4E
                }
              }
            }
          }
        }
      }
    }
    ::v-deep.footer {
      margin-top: 0;
    }
    //#seventh {
    //  padding-top: 450px;
    //  margin-top: -450px;
    //}
    //#eighth {
    //  padding-top: 450px;
    //  margin-top: -450px;
    //}
    @media (max-width: 1025px) {
      .privacy {
        .navigation-field {
          display: none;
        }
        .canvas-field {
          width: 100%;
          padding: 50px 30px;
          margin-top: -80px;
          box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
        }
      }
    }
    @media (max-width: 690px) {
      .privacy {
        .canvas-field {
          padding: 45px 15px;
        }
      }
    }
  }
  .text-block {
    margin-bottom: 50px;
    &-title {
      h3 {
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: 500;
        line-height: 48px;
        color: #1C2445
      }
    }
    &-content {
      p {
        margin-bottom: 28px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #4E4E4E;
        // white-space: pre-line;
        strong {
          font-size: 15px;
        }
      }
    }
  }

</style>
