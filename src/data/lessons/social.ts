import type { Lesson } from '../../types'

/** Social studies lessons (grades 10–12) for the Learning Center. */
export const socialLessons: Lesson[] = [
  {
    id: 'soc-globalization',
    subject: 'social',
    grade: 10,
    title: 'What Is Globalization?',
    emoji: '🌐',
    summary:
      'The world\u2019s economies, cultures, and politics are more connected than ever. Learn the three dimensions of globalization — and the vocabulary for arguing about whether it\u2019s a good thing.',
    sections: [
      {
        heading: 'One process, three dimensions',
        body:
          'Globalization is the process by which the world\u2019s people, economies, and cultures become increasingly interconnected. It is easiest to analyze through three lenses:\n\n• Economic — global trade, transnational corporations (companies operating in many countries), outsourcing, and institutions like the World Trade Organization (founded 1995). Your phone was designed in one country, assembled in another, from materials mined in several more.\n• Social/cultural — the spread of ideas, media, food, languages, and values, accelerated enormously by the internet and social media. K-pop in Calgary and hockey fans in Helsinki are both cultural globalization.\n• Political — countries cooperating through international bodies (the United Nations, the G7, NATO) and agreements on trade, climate, and human rights that reach across borders.\n\nGlobalization is old — the Silk Road and the fur trade were early forms — but its SPEED and SCALE since the late 20th century are new.',
        tip: 'On written responses, always say WHICH dimension you are discussing. "Globalization affects Canada" is vague; "economic globalization affects Canadian workers through outsourcing" is a markable point.',
      },
      {
        heading: 'What happens when cultures meet',
        body:
          'Four key terms describe cultural contact — exams love asking you to tell them apart:\n\n• Acculturation — a culture adopts some traits of another while keeping its own identity: sushi becoming everyday Canadian food.\n• Assimilation — a culture is absorbed into a dominant one and loses its distinctiveness. It can be voluntary or forced — Canada\u2019s residential school system was forced assimilation of Indigenous peoples.\n• Hybridization — cultures blend into something new: fusion cuisine, Punjabi hip hop, Franglais.\n• Homogenization — cultures become more alike worldwide, usually resembling dominant (often American) culture: the same coffee chains, movies, and malls on every continent.\n\nA linked concern is the loss of language diversity: of the roughly 7,000 languages spoken today, many are endangered as global languages crowd them out.',
      },
      {
        heading: 'The debate: who wins and who loses?',
        body:
          'Arguments FOR globalization:\n\n• Trade raises overall wealth and has helped lift hundreds of millions out of extreme poverty, especially in Asia.\n• Consumers get more choice at lower prices.\n• Ideas — including human rights, medicine, and technology — spread faster.\n\nArguments AGAINST:\n\n• Jobs move to wherever labour is cheapest, hollowing out local industries; sweatshop conditions persist in some supply chains.\n• Profits often flow to wealthy countries while environmental costs stay local.\n• Cultural homogenization threatens local traditions, languages, and identities.\n\nStrong answers avoid "globalization is good/bad" and instead argue WHO benefits, WHO pays, and under what conditions.',
        tip: 'Source-analysis questions usually hide a perspective: a cartoon of a globe wearing a fast-food logo is criticizing homogenization. Identify the dimension, the perspective (pro/anti), and the technique.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Treating globalization as ONLY economic — the social and political dimensions carry equal weight in the curriculum.\n• Confusing assimilation (identity absorbed/lost) with acculturation (traits adopted, identity kept).\n• Vague examples. "Companies operate globally" earns little; naming a real transnational corporation and a real effect earns more.\n• One-sided position papers. Top responses acknowledge the strongest opposing argument and answer it.\n• Forgetting Indigenous perspectives — in the Canadian curriculum, the impact of globalization (historic and current) on Indigenous peoples is a core theme, not an add-on.',
      },
    ],
    tricks: [
      {
        name: 'The three lenses',
        trick:
          'Economic, Social, Political — E-S-P. Run every globalization question through all three lenses ("Extra-Sensory Perception for globalization") and you will never write a one-dimensional answer.',
      },
      {
        name: 'Adopt, Absorb, Blend, Blanket',
        trick:
          'Acculturation = ADOPT some traits, keep identity. Assimilation = ABSORBED, identity lost. Hybridization = BLEND into something new. Homogenization = one BLANKET culture covers everyone.',
      },
      {
        name: 'Follow your phone',
        trick:
          'Need an instant example of globalization? Trace one smartphone: designed in the US, chips from Taiwan, assembled in China, minerals from the DRC, sold in Canada — all three dimensions in your pocket.',
      },
    ],
  },
  {
    id: 'soc-imperialism',
    subject: 'social',
    grade: 10,
    title: 'Imperialism & Its Legacies',
    emoji: '🗺️',
    summary:
      'How a handful of European powers came to control most of the world, why they claimed the right to do it, and how those choices still shape Canada and the Global South today.',
    sections: [
      {
        heading: 'What imperialism is and why it happened',
        body:
          'Imperialism is the policy of extending a country\u2019s power over other lands and peoples — through colonization, military force, or economic control. The classic motives are summarized as "Gold, God, and Glory":\n\n• Gold — wealth: raw materials (rubber, cotton, minerals, furs), cheap labour, and captive markets to sell goods back to.\n• God — missionary zeal: spreading Christianity and European "civilization", captured in the self-justifying idea of the "civilizing mission".\n• Glory — national prestige: colonies as status symbols in the rivalry between European powers.\n\nUnderneath ran ethnocentrism (judging other cultures by your own standards) and Eurocentrism (viewing Europe as the centre and peak of civilization) — beliefs used to justify domination as a favour to the dominated.',
      },
      {
        heading: 'Imperialism in action: two case studies',
        body:
          '• The Scramble for Africa: at the Berlin Conference (1884–85), European powers set rules for dividing Africa among themselves — with no African representatives present. By 1914, about 90 percent of Africa was under European control. Borders drawn with rulers on maps split some nations and forced rivals together, a root of many modern conflicts. The most notorious regime, King Leopold II\u2019s Congo Free State (1885–1908), killed millions through forced rubber labour.\n• British India: the East India Company ruled much of India for a century before the British Crown took direct control in 1858 (the British Raj). India supplied cotton, tea, and taxes; Britain sold manufactured goods back. India gained independence in 1947 under leaders including Mohandas Gandhi — followed immediately by the traumatic Partition into India and Pakistan.',
      },
      {
        heading: 'The legacy in Canada',
        body:
          'Canada is not just a former colony — it is also a place where imperialism was carried out against Indigenous peoples, with consequences that are current events, not ancient history:\n\n• The Indian Act (1876) placed First Nations under federal control, restricted movement and ceremonies (the potlatch was banned from 1884 to 1951), and still governs much of Crown–First Nations relations today.\n• Residential schools operated for over a century — the last federally run school closed in 1996. An estimated 150,000 First Nations, Métis, and Inuit children were taken from their families with the explicit goal of forced assimilation; thousands died.\n• The Truth and Reconciliation Commission (2008–2015) documented survivors\u2019 testimony and issued 94 Calls to Action. It described the residential school system as cultural genocide.\n\nOther legacies worldwide: extracted economies still dependent on exporting raw materials, imposed borders, imposed languages, and global wealth gaps that map closely onto the old colonial map.',
        tip: 'Connect past to present explicitly: "The Indian Act (1876) still shapes governance today" is a stronger point than describing either the past or the present alone. Legacy questions are asking for that bridge.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Writing about imperialism as purely historical — legacy questions demand modern consequences (TRC Calls to Action, ongoing land claims, economic dependency).\n• Vague dates. Anchor answers with the Berlin Conference (1884–85), the Indian Act (1876), and the TRC (2008–2015).\n• Confusing ethnocentrism (judging other cultures) with Eurocentrism (Europe as the standard) — Eurocentrism is the specific European brand of ethnocentrism.\n• Describing colonization as a neutral "exchange". Be factual about power: it was domination, and the curriculum expects you to analyze it as such.\n• Ignoring resistance — colonized peoples always resisted (rebellions, negotiations, cultural survival). Mentioning agency, not just victimhood, marks a sophisticated answer.',
      },
    ],
    tricks: [
      {
        name: 'Gold, God, Glory',
        trick:
          'The three classic motives for imperialism: wealth (Gold), missionary zeal (God), and national prestige (Glory). Run any empire\u2019s actions through the three G\u2019s and the motives sort themselves.',
      },
      {
        name: 'Berlin: carving a cake',
        trick:
          'Remember the Berlin Conference (1884–85) with the image its own era used: European statesmen slicing an African cake — with nobody from Africa at the table. The image IS the exam point: exclusion.',
      },
      {
        name: '1876 → 1996 → 2015',
        trick:
          'Canada\u2019s legacy timeline in three numbers: Indian Act 1876, last residential school closed 1996, TRC final report and 94 Calls to Action 2015. A 139-year span — proof that "legacy" means living memory.',
      },
    ],
  },
  {
    id: 'soc-canada-world-wars',
    subject: 'social',
    grade: 10,
    title: 'Canada in the World Wars',
    emoji: '🍁',
    summary:
      'Canada entered WWI as a British colony and left WWII as a respected middle power. Follow the battles, the home-front conflicts, and the injustices that mark the road in between.',
    sections: [
      {
        heading: 'WWI (1914–1918): a colony proves itself',
        body:
          'When Britain declared war on Germany on August 4, 1914, Canada was automatically at war too — no separate choice existed. About 620,000 Canadians served, out of a population of only 8 million; more than 60,000 were killed.\n\nDefining battles:\n\n• Ypres (1915) — Canadians endured one of the first large-scale chlorine gas attacks and held the line.\n• The Somme (1916) — devastating losses; the Newfoundland Regiment was nearly wiped out at Beaumont-Hamel on July 1, 1916.\n• Vimy Ridge (April 9–12, 1917) — all four Canadian divisions attacked together for the first time and took a ridge that had defeated previous Allied attempts. Vimy is remembered as a nation-defining moment: "the birth of a nation" is the (debated) phrase.\n• Passchendaele (1917) — victory in a sea of mud at a cost of nearly 16,000 Canadian casualties.\n\nCanada\u2019s war effort earned it a separate signature on the Treaty of Versailles (1919) — a symbolic step toward independence.',
      },
      {
        heading: 'The home front and the conscription crisis',
        body:
          'The war transformed Canada internally:\n\n• Women filled factory and farm jobs, strengthening the case for the vote: most Canadian women won the federal franchise in 1918.\n• The government took new powers under the War Measures Act (1914) and interned about 8,500 "enemy aliens", mostly Ukrainian immigrants.\n• The Conscription Crisis of 1917: as volunteers dwindled, Prime Minister Robert Borden\u2019s Military Service Act made enlistment compulsory. English Canada largely supported it; French Canada, feeling little loyalty to either Britain or France, bitterly opposed it. Riots broke out in Quebec City in 1918.\n\nThe crisis carved a lasting English–French divide into Canadian politics — a theme that returns in WWII and echoes into later Quebec nationalism.',
        tip: 'Conscription is a two-exam topic: it happened in BOTH wars (1917, and again — more cautiously — in 1944). If a question says "conscription", check which war before writing a word.',
      },
      {
        heading: 'WWII (1939–1945): a country chooses for itself',
        body:
          'This time the choice was Canada\u2019s own. Thanks to the Statute of Westminster (1931), which gave Canada control of its foreign policy, Parliament debated and declared war on Germany independently on September 10, 1939 — one week after Britain.\n\nKey Canadian moments:\n\n• The Battle of the Atlantic (1939–1945) — Canada\u2019s navy grew into one of the world\u2019s largest, escorting convoys past German U-boats.\n• Dieppe (August 19, 1942) — a disastrous raid on the French coast: of about 5,000 Canadians, over 900 were killed and nearly 2,000 taken prisoner. Its hard lessons shaped later invasion planning.\n• The Italian Campaign (1943–45) and the liberation of the Netherlands (1944–45), for which the Dutch still send Canada tulips every year.\n• D-Day (June 6, 1944) — Canadians landed at Juno Beach, one of the five Normandy beaches, and pushed farther inland on day one than almost any other Allied force.\n\nAbout 1.1 million Canadians served; more than 45,000 died.',
      },
      {
        heading: 'Injustice at home — and where people lose marks',
        body:
          'The home front had a dark side that exams increasingly emphasize:\n\n• Japanese Canadian internment: beginning in 1942, about 22,000 Japanese Canadians — most of them British subjects born in Canada — were forcibly removed from the BC coast; their homes, boats, and businesses were confiscated and sold. The federal government formally apologized and paid redress in 1988.\n• Canada\u2019s "none is too many" policy turned away Jewish refugees in the 1930s, including the ship MS St. Louis in 1939.\n\nWhere people lose marks:\n\n• Saying Canada was "taken into" WWII by Britain — that was 1914. In 1939 Canada declared war itself; the week\u2019s delay is the proof.\n• Mixing up the beaches: Canadians took JUNO on D-Day. Dieppe (1942) was the earlier failed raid — different event, different year.\n• Vague dates: Vimy is April 1917, Dieppe is August 1942, D-Day is June 6, 1944.\n• Ignoring the home front. Questions about "Canada\u2019s war experience" expect women\u2019s work, conscription, and internment — not just battles.',
        tip: 'The independence arc is the essay skeleton markers love: 1914 automatically at war → 1917 Vimy + separate Versailles signature 1919 → 1931 Statute of Westminster → 1939 Canada declares war ITSELF. Four dates tell the whole story.',
      },
    ],
    tricks: [
      {
        name: 'V-D-J: Vimy, Dieppe, Juno',
        trick:
          'Canada\u2019s three most-tested battle names, in order: Vimy 1917 (triumph, WWI), Dieppe 1942 (disaster, raid), Juno 1944 (D-Day beach). Chant "17-42-44" with them and the dates stick.',
      },
      {
        name: 'One week of independence',
        trick:
          'Britain declared war September 3, 1939; Canada on September 10. That deliberate one-week gap is the single best evidence that Canada had become independent in foreign policy — memorize it as a matched pair.',
      },
      {
        name: 'Same crisis, twice',
        trick:
          'Conscription split English and French Canada in 1917 and again in 1944. Remember it as history hitting replay — and use the repeat to argue that WWI\u2019s wounds shaped WWII\u2019s politics.',
      },
    ],
  },
  {
    id: 'soc-nationalism',
    subject: 'social',
    grade: 11,
    title: 'Nationalism & National Identity',
    emoji: '🏳️',
    summary:
      'What makes millions of strangers feel like one "we"? Unpack nation vs state, civic vs ethnic nationalism, and the forces that built — and strain — Canadian identity.',
    sections: [
      {
        heading: 'Nation, state, nation-state: three different things',
        body:
          'These terms are NOT interchangeable, and exams test the difference:\n\n• A nation is a group of people who feel they belong together through shared language, culture, history, religion, or territory. It lives in people\u2019s minds and hearts — no government required.\n• A state is a political unit: defined territory, government, sovereignty. It lives on maps.\n• A nation-state is the (rare, mostly idealized) case where one nation has its own state — Japan and Iceland come close.\n\nMost states contain multiple nations: Canada includes, among others, the Québécois and many First Nations, Métis, and Inuit nations. And some nations have no state — the Kurds, spread across Turkey, Iraq, Iran, and Syria, are the classic example.\n\nNationalism is the feeling of loyalty and devotion to one\u2019s nation — and the belief that the nation\u2019s interests deserve political expression.',
        tip: 'Quick sort: nation = people who FEEL like a "we". State = lines on a map with a government. If you can point to it on a map, it\u2019s a state; if it lives in identity, it\u2019s a nation.',
      },
      {
        heading: 'Where modern nationalism came from',
        body:
          'Loyalty used to flow to monarchs and churches. The French Revolution (1789) redirected it: sovereignty, the revolutionaries declared, belongs to the NATION — the people themselves. Citizens fought for "la nation", sang a national anthem (La Marseillaise, 1792), and flew a national flag.\n\nNationalism then spread across the 19th century, unifying some peoples (Italy by 1861, Germany in 1871) and cracking apart multi-national empires like Austria-Hungary and the Ottoman Empire.\n\nTwo flavours emerged that we still distinguish today:\n\n• Civic nationalism — belonging based on shared values, laws, and citizenship, open to anyone who joins: the official Canadian model.\n• Ethnic nationalism — belonging based on ancestry, language, and culture: you are born into the nation, or you are outside it.\n\nThe distinction matters because ethnic nationalism, pushed to extremes, defines insiders and outsiders by blood — the road toward ultranationalism.',
      },
      {
        heading: 'Nationalism inside Canada',
        body:
          'Canada is a laboratory of competing and coexisting nationalisms:\n\n• Québécois nationalism — rooted in the French language, culture, and the memory of the Conquest (1759–60). The Quiet Revolution of the 1960s modernized Quebec and turned nationalism political ("Maîtres chez nous" — masters in our own house). Sovereignty referendums followed: 1980 (about 60% voted No) and 1995, when the No side won by less than one percentage point — 50.6% to 49.4%.\n• First Nations, Métis and Inuit nationhood — self-determination expressed through treaties, land claims, self-government agreements (e.g., the creation of Nunavut in 1999), and language revitalization. These nations predate Canada itself.\n• Pan-Canadian identity — built deliberately through symbols and policies: the maple leaf flag (1965), official bilingualism (1969), and official multiculturalism (1971, the first such policy in the world).\n\nNational identity is contested, layered, and changing — a Canadian can carry several loyalties at once.',
        tip: 'For the 1995 referendum, "50.6 to 49.4" is the figure to memorize — a No margin of about 54,000 votes. It instantly proves the claim that Canadian unity was genuinely at stake.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Using nation and state as synonyms — the entire unit is built on the difference.\n• Calling nationalism inherently good or bad. It liberates (decolonization movements) and destroys (world wars); top answers judge specific USES, not the concept.\n• Vague Canadian content: name the Quiet Revolution (1960s), the referendums (1980, 1995), Nunavut (1999) — specifics carry the marks.\n• Forgetting non-state nations (Kurds, Catalans, Québécois, First Nations) when asked whether every nation has a state.\n• Confusing patriotism (love of country) with nationalism (the nation should shape politics) — related, but the second makes political claims.',
      },
    ],
    tricks: [
      {
        name: 'Nation = notion',
        trick:
          'A NATION is a NOTION — it exists in shared minds and hearts. A STATE has real eSTATE — territory, borders, a government. Rhyme them and you will never mix them again.',
      },
      {
        name: '1789: loyalty changes address',
        trick:
          'Before the French Revolution, loyalty went UP to a king. After 1789 it went SIDEWAYS to fellow citizens — the nation. One date, one arrow-turn, and modern nationalism is explained.',
      },
      {
        name: 'Civic chooses, ethnic inherits',
        trick:
          'Civic nationalism you can JOIN (values and citizenship — anyone can become Canadian). Ethnic nationalism you must be BORN INTO (blood and ancestry). Join vs born: the whole distinction in two words.',
      },
    ],
  },
  {
    id: 'soc-ultranationalism',
    subject: 'social',
    grade: 11,
    title: 'Ultranationalism & Genocide',
    emoji: '🕯️',
    summary:
      'When love of nation curdles into hatred of others, the results have been humanity\u2019s darkest chapters. Study how it happens — factually and respectfully — so the warning signs are recognizable.',
    sections: [
      {
        heading: 'From nationalism to ultranationalism',
        body:
          'Nationalism is loyalty to one\u2019s nation. Ultranationalism is that loyalty pushed to an extreme where the nation is placed above all else — above other nations, above minorities, above individual rights and human life.\n\nWarning signs that nationalism has turned ultra:\n\n• The nation is portrayed as superior to all others, with a special destiny.\n• Minorities and outsiders are scapegoated — blamed for the nation\u2019s problems.\n• Propaganda floods public life; dissent is treated as treason.\n• Individual rights are sacrificed "for the nation".\n• Aggression toward other nations is glorified.\n\nConditions that feed it: economic crisis, national humiliation, fear, and a charismatic leader offering someone to blame. Germany after WWI had all four — a defeated nation, the punishing Treaty of Versailles (1919), and the Great Depression created the despair the Nazi Party exploited on its way to power in 1933.',
        tip: 'The cleanest exam distinction: nationalism says "we love our nation"; ultranationalism says "our nation matters MORE than yours — and more than the people inside it who don\u2019t belong."',
      },
      {
        heading: 'What genocide means',
        body:
          'The word genocide was coined in 1944 by Raphael Lemkin, a Polish-Jewish lawyer who lost most of his family in the Holocaust, from the Greek "genos" (race, people) and Latin "-cide" (killing).\n\nThe UN Convention on the Prevention and Punishment of the Crime of Genocide (1948) defines genocide as acts committed with INTENT to destroy, in whole or in part, a national, ethnical, racial or religious group — including killing members of the group, causing serious bodily or mental harm, inflicting conditions of life calculated to destroy the group, preventing births, and forcibly transferring children of the group to another group.\n\nTwo things to notice: intent to destroy a group AS a group is the defining element, and mass killing is only one of the listed acts — forcibly transferring children is genocide under the Convention, which is directly relevant to how Canada\u2019s residential school system has been described.',
      },
      {
        heading: 'Historical cases — studied factually',
        body:
          'Each of these is documented history, and each followed the ultranationalist pattern of dehumanization before destruction:\n\n• The Armenian Genocide (1915–1916): the Ottoman Empire\u2019s government deported and murdered an estimated 1 million or more Armenians through massacres and death marches into the Syrian desert. Canada formally recognizes it as genocide.\n• The Holodomor (1932–33): a man-made famine in Soviet Ukraine under Stalin killed millions of Ukrainians — grain was confiscated while people starved. Canada recognizes it as genocide.\n• The Holocaust (Shoah): Nazi Germany\u2019s systematic murder of approximately 6 million Jews (1941–1945), alongside Roma, disabled people, Slavs, political prisoners, and others. It progressed by stages — legal discrimination (Nuremberg Laws, 1935), state-organized violence (Kristallnacht, 1938), ghettos, and finally industrialized killing in camps such as Auschwitz.\n• Rwanda (1994): in roughly 100 days, Hutu extremists murdered about 800,000 Tutsi and moderate Hutu. Radio propaganda calling Tutsi "cockroaches" showed dehumanization\u2019s role; the UN force on the ground — commanded by Canadian General Roméo Dallaire — was denied the mandate and troops to stop it.\n\nAfter the Holocaust, the world said "never again"; Rwanda, less than 50 years later, is why the phrase is discussed with humility.',
        tip: 'Precision honours the victims: Armenian Genocide 1915, Holodomor 1932–33, Holocaust — 6 million Jews, Rwanda 1994 — about 800,000 in about 100 days. Vague numbers and dates weaken both the answer and the respect the topic demands.',
      },
      {
        heading: 'The stages of genocide — and how to write about this',
        body:
          'Scholar Gregory Stanton proposed (1996) that genocide develops in predictable stages — his model, later expanded to ten, includes: classification (us vs them), symbolization (badges, labels), discrimination, dehumanization (calling people vermin or insects), organization, polarization, preparation, persecution, extermination, and denial.\n\nDehumanization is the hinge stage: once propaganda makes a group less than human, ordinary people can be led to accept the unacceptable. Denial is the final stage — which is why recognition and remembrance matter politically, not just morally.\n\nWhere people lose marks:\n\n• Using "genocide" loosely for any atrocity — apply the Convention\u2019s definition, especially INTENT.\n• Writing that ordinary Germans (or Rwandans) were uniquely evil. The discipline\u2019s harder lesson is that propaganda, fear, obedience, and crisis can corrupt ordinary people anywhere.\n• Ignoring responses and resistance: rescuers, resisters, the Nuremberg Trials (1945–46), and the Genocide Convention (1948) belong in a complete answer.\n• Treating it as distant: the TRC (2015) called residential schools cultural genocide, and in 2019 the National Inquiry into Missing and Murdered Indigenous Women and Girls used the word genocide. The curriculum expects you to engage with these findings seriously.',
      },
    ],
    tricks: [
      {
        name: 'Love vs supremacy',
        trick:
          'Nationalism = love of your own nation. Ultranationalism = supremacy of your nation over others and over individual rights. The moment "we\u2019re proud" becomes "they\u2019re the problem", the line has been crossed.',
      },
      {
        name: 'Dehumanize before destroy',
        trick:
          'Every genocide was preceded by language: "vermin", "cockroaches", "subhuman". When propaganda strips a group\u2019s humanity, the machinery of violence is being oiled. It is the warning sign to cite in any stages question.',
      },
      {
        name: 'The 4-case anchor set',
        trick:
          'Memorize four cases as your evidence bank: Armenia 1915, Holodomor 1932–33, Holocaust 1941–45, Rwanda 1994. Different perpetrators, decades, and continents — proving the pattern is human, not national.',
      },
      {
        name: 'Denial is stage ten',
        trick:
          'Stanton\u2019s model ends with DENIAL — genocides are followed by cover-ups and minimization. That is the exam-ready reason why official recognition (like Canada recognizing the Armenian Genocide and Holodomor) matters.',
      },
    ],
  },
  {
    id: 'soc-internationalism',
    subject: 'social',
    grade: 11,
    title: 'Internationalism & the United Nations',
    emoji: '🕊️',
    summary:
      'If ultranationalism nearly destroyed the world twice, internationalism is the counter-bet: that nations acting together achieve what none can alone. Meet the UN — and Canada\u2019s outsized role in it.',
    sections: [
      {
        heading: 'What internationalism is',
        body:
          'Internationalism is the belief that nations should cooperate — through trade, diplomacy, international law, and shared institutions — to solve problems that cross borders: war, poverty, pandemics, climate change.\n\nMotives range from self-interest (trade partners are less likely to fight you; other countries\u2019 pandemics become yours) to humanitarianism (a duty to all people, not just conationals).\n\nIt is NOT the opposite of nationalism — a country can pursue its national interest THROUGH cooperation, which is exactly how Canada, a "middle power", has usually operated: not strong enough to dictate, influential when it builds coalitions.\n\nThe first grand experiment, the League of Nations (1920), was born from WWI — and failed: the United States never joined, the League had no army, and it stood by as Japan, Italy, and Germany invaded their neighbours in the 1930s.',
        tip: 'The League matters mostly as a lesson: exams ask what the UN learned from it. Answers: broader membership (including all great powers), a Security Council that can authorize force, and binding obligations.',
      },
      {
        heading: 'The United Nations: structure',
        body:
          'The UN Charter took effect on October 24, 1945 (celebrated as UN Day), signed by 51 founding countries including Canada; today membership is nearly every state on Earth (193).\n\nMain organs to know:\n\n• General Assembly — all members, one vote each. A world forum; its resolutions carry moral weight but are not binding.\n• Security Council — responsible for peace and security; the only body whose decisions bind all members. 15 members: 10 elected for two-year terms, and 5 permanent members — the United States, United Kingdom, France, Russia (the USSR\u2019s seat until 1991), and China. Each permanent member holds a VETO: one "no" from the P5 blocks any substantive resolution.\n• Secretariat — the UN\u2019s civil service, led by the Secretary-General.\n• International Court of Justice — settles legal disputes between states, at The Hague.\n• Specialized agencies and funds — WHO (health), UNICEF (children), UNHCR (refugees), UNESCO (education, science, culture).\n\nThe veto is the UN\u2019s central controversy: it kept the great powers inside the organization, but it paralyzes the Council whenever a P5 member\u2019s interests are touched — as the Cold War proved repeatedly.',
      },
      {
        heading: 'Canada and the UN: peacekeeping and rights',
        body:
          'Canada\u2019s reputation as an internationalist middle power rests on real episodes:\n\n• The Suez Crisis (1956): when Britain, France, and Israel invaded Egypt over the nationalized Suez Canal, Canadian diplomat Lester B. Pearson proposed the first large-scale UN peacekeeping force to separate the sides. It worked; Pearson won the 1957 Nobel Peace Prize and later became prime minister. Peacekeeping became a pillar of Canadian identity.\n• The Universal Declaration of Human Rights (adopted December 10, 1948): its principal drafter was a Canadian, John Peters Humphrey of New Brunswick, working with Eleanor Roosevelt. The UDHR is the foundation of modern human rights law.\n• The limits: the Rwandan genocide (1994) unfolded under a UN mission commanded by Canadian General Roméo Dallaire, whose urgent warnings were ignored and whose force was cut instead of reinforced — the case study for peacekeeping\u2019s hardest lesson: a mandate without means fails.\n\nCanada also helped found the International Criminal Court (Rome Statute, 1998) and championed the Responsibility to Protect (R2P) doctrine, endorsed by the UN in 2005.',
        tip: 'Pearson–Suez–1956–Nobel 1957 is the single most-tested fact cluster in this unit. Learn it as one breath.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Saying the General Assembly makes binding law — only Security Council decisions bind members; GA resolutions are recommendations.\n• Listing the P5 wrong. It is the US, UK, France, Russia, China — the WWII victors. Germany, Japan, and India are NOT permanent members (their exclusion is a standard reform-debate point).\n• Confusing peacekeeping (neutral forces monitoring a truce both sides accepted) with peacemaking or enforcement (using force to impose peace).\n• Treating the UN as either a world government (it is not — sovereignty remains with states) or as useless (smallpox eradication, UDHR, and decades of peacekeeping say otherwise). Nuanced evaluation scores highest.\n• Dropping Canadian content: Pearson, Humphrey, and Dallaire are the three Canadian names this unit expects.',
      },
    ],
    tricks: [
      {
        name: 'P5 = WWII winners',
        trick:
          'The five permanent Security Council members are simply the main WWII victors: US, UK, France, Russia (then USSR), China. Remember the war, remember the P5 — and why 1945\u2019s power map still rules 2020s diplomacy.',
      },
      {
        name: 'GA talks, SC binds',
        trick:
          'General Assembly = the world\u2019s microphone (every state, one vote, non-binding). Security Council = the world\u2019s muscle (15 members, binding decisions, P5 veto). Talks vs binds — never confuse the two.',
      },
      {
        name: 'The Canadian trio',
        trick:
          'Three Canadians carry this whole unit: PEARSON invented peacekeeping (Suez 1956), HUMPHREY drafted the UDHR (1948), DALLAIRE showed peacekeeping\u2019s limits (Rwanda 1994). Invention, foundation, limitation.',
      },
    ],
  },
  {
    id: 'soc-ideologies',
    subject: 'social',
    grade: 12,
    title: 'Political Ideologies on the Spectrum',
    emoji: '⚖️',
    summary:
      'Left, right, liberal, socialist, conservative — stop guessing what the labels mean. Map the spectrum, meet the thinkers behind each ideology, and learn why one axis is never enough.',
    sections: [
      {
        heading: 'Why "left" and "right"? A seating chart',
        body:
          'The terms come from the French Revolution: in the National Assembly of 1789, supporters of radical change happened to sit to the LEFT of the president\u2019s chair, while defenders of the king and tradition sat to the RIGHT. The seating chart became the world\u2019s political vocabulary.\n\nAs rough tendencies:\n\n• Left — prioritizes equality and collective welfare; comfortable using government to reduce economic gaps; open to change.\n• Right — prioritizes individual economic freedom, tradition, and order; prefers markets over government intervention; cautious about change.\n\nUnderneath runs the deeper axis the curriculum is built on: individualism (the individual\u2019s rights, freedom, and self-interest come first) versus collectivism (the group\u2019s well-being, security, and equality come first). Every ideology is a different recipe mixing the two.',
      },
      {
        heading: 'Liberalism: classical and modern',
        body:
          'Liberalism puts the INDIVIDUAL at the centre — but it split into two streams that sit at different points on the economic spectrum:\n\n• Classical liberalism (17th–19th century): John Locke argued for natural rights — life, liberty, property — and government by consent. Adam Smith (The Wealth of Nations, 1776) argued that free markets, guided by the "invisible hand" of self-interest and competition, create prosperity without central direction. Government should be small: protect rights, enforce contracts, stay out of the economy (laissez-faire).\n• Modern liberalism (20th century): after industrialization\u2019s brutal working conditions and especially the Great Depression (1929 onward), liberals concluded that pure laissez-faire leaves people neither free nor equal. John Maynard Keynes argued government should spend to fight downturns; welfare states — unemployment insurance, public pensions, public healthcare (Canada\u2019s medicare, built from Saskatchewan\u2019s 1962 model) — followed.\n\nSame core value (individual freedom), opposite conclusions about government: classical liberals see government as the threat to freedom; modern liberals see it as a tool that makes freedom real for everyone.',
        tip: 'This is the trap the whole course guards: "liberal" in the historical/classical sense means FREE MARKETS and small government — closer to what Canadians casually call "conservative" economics today. Always specify classical or modern.',
      },
      {
        heading: 'Socialism and conservatism',
        body:
          '• Socialism — a collectivist response to industrial capitalism\u2019s inequality. Karl Marx and Friedrich Engels (The Communist Manifesto, 1848) saw history as class struggle and predicted workers would overthrow capitalism. Branches matter: democratic socialism / social democracy pursues equality gradually through elections, unions, and public programs (the tradition behind Canada\u2019s CCF/NDP and Tommy Douglas, "father of medicare"), while revolutionary communism (Lenin, 1917 Russian Revolution) seized total state control of the economy — with results that turned authoritarian.\n• Conservatism — born as a REACTION to the French Revolution\u2019s chaos. Edmund Burke (Reflections on the Revolution in France, 1790) argued society is a fragile inheritance built by generations: change should be gradual and tested, institutions (family, faith, tradition) deserve respect, and sweeping utopian redesigns end in terror. Modern fiscal conservatism adds classical-liberal economics: low taxes, free markets, small government.\n\nQuick modern map: communism sits far left, social democracy centre-left, modern liberalism centre, classical liberalism / fiscal conservatism centre-right, and fascism — which is ultranationalist, anti-democratic, and rejects individualism entirely — far right.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Treating the spectrum as one line. Economic views (market vs state) and social views (personal freedoms vs tradition/authority) are separate axes — a person can be economically right and socially left. Two-axis answers read as sophisticated; one-line answers read as simplistic.\n• Confusing socialism with communism — democratic socialists compete in elections; communist regimes abolished them. Precision here is worth real marks.\n• Writing that conservatives oppose all change. Burkean conservatism accepts change — gradual, tested change — and opposes radical rupture.\n• Assigning thinkers to the wrong camp: Locke and Smith → classical liberalism; Keynes → modern liberalism; Marx and Engels → socialism/communism; Burke → conservatism.\n• Forgetting the extremes meet in practice: fascism (far right) and Stalinism (far left) both ended in totalitarianism — the deeper axis of democratic vs authoritarian cuts across left and right.',
        tip: 'Memorize the founder-and-book pairs like flashcards: Smith 1776, Burke 1790, Marx & Engels 1848. Three dates, three ideologies, instant evidence for any essay.',
      },
    ],
    tricks: [
      {
        name: 'The seating chart of 1789',
        trick:
          'Left and right are literally where people SAT in France\u2019s National Assembly: radicals left of the chair, royalists right. Change sat left, tradition sat right — and still does.',
      },
      {
        name: 'Equality left, liberty right',
        trick:
          'Rough compass for the economic spectrum: the further LEFT, the more weight on EQUALITY (state action to level outcomes); the further RIGHT, the more weight on economic LIBERTY (markets and property). Neither pole rejects the other value — they rank them differently.',
      },
      {
        name: 'Smith–Burke–Marx: 1776, 1790, 1848',
        trick:
          'Three founders, three books, three dates: Adam Smith\u2019s Wealth of Nations (1776, classical liberalism), Burke\u2019s Reflections (1790, conservatism), Marx & Engels\u2019 Communist Manifesto (1848, socialism). The dates even sit in historical order of the ideologies reacting to each other.',
      },
      {
        name: 'Two axes or it\u2019s wrong',
        trick:
          'Before placing anyone on the spectrum, ask TWO questions: markets or state? (economic axis) and individual freedom or tradition/authority? (social axis). One answer per axis — a single left/right label always oversimplifies.',
      },
    ],
  },
  {
    id: 'soc-cold-war',
    subject: 'social',
    grade: 12,
    title: 'The Cold War in 10 Minutes',
    emoji: '🧊',
    summary:
      'Two superpowers, two ideologies, zero direct battles — and 46 years of the world holding its breath. The whole conflict, decade by decade, with Canada\u2019s place in it.',
    sections: [
      {
        heading: 'What made it "cold" (1945–1949)',
        body:
          'The Cold War (1945–1991) was the global standoff between the capitalist, democratic United States and the communist Soviet Union — "cold" because the superpowers never fought each other directly. With both sides holding nuclear weapons, direct war risked mutual annihilation, so the conflict ran through proxy wars, espionage, propaganda, and technological races instead.\n\nThe opening moves:\n\n• Wartime allies fell out over Eastern Europe: at Yalta and Potsdam (1945), Stalin promised free elections in the territories the Red Army occupied — then installed communist governments instead.\n• Winston Churchill named the divide in 1946: an "Iron Curtain" had descended across Europe.\n• The US answered with containment: the Truman Doctrine (1947) pledged support for nations resisting communism, and the Marshall Plan (1948) rebuilt Western Europe with about $13 billion in aid — prosperity as an anti-communist weapon.\n• First confrontation: the Berlin Blockade (1948–49). Stalin cut off road and rail access to West Berlin; the Allies flew supplies in for eleven months (the Berlin Airlift) until he backed down.\n• The teams formalized: NATO founded in 1949 (Canada a founding member), answered by the Soviet-led Warsaw Pact in 1955.',
      },
      {
        heading: 'Crisis years (1950–1962)',
        body:
          '• Korean War (1950–53): communist North Korea invaded the South; a UN force (including about 26,000 Canadians) pushed back. It ended in stalemate at the 38th parallel — an armistice, never a peace treaty, which is why Korea is still divided.\n• The arms race went thermonuclear: both sides tested hydrogen bombs by the mid-1950s, settling into the logic of MAD — Mutually Assured Destruction: neither side can strike first without being destroyed in return. Terrifying, but stabilizing.\n• The space race doubled as a missile race: the USSR launched Sputnik (1957) and Yuri Gagarin (1961); the US answered with the Apollo program and the Moon landing (1969).\n• The Berlin Wall (built August 1961) sealed East Berliners in — the Iron Curtain made concrete.\n• The Cuban Missile Crisis (October 1962): US spy planes photographed Soviet nuclear missile sites in Cuba, 150 km from Florida. For thirteen days the world stood at the edge of nuclear war, until Khrushchev withdrew the missiles in exchange for a US pledge not to invade Cuba (and a quiet US missile withdrawal from Turkey). It is the closest the Cold War ever came to going hot.',
        tip: 'The Cuban Missile Crisis is the unit\u2019s star exam topic: October 1962, thirteen days, Kennedy vs Khrushchev, naval "quarantine" of Cuba, resolved by negotiated trade. Know it in that detail.',
      },
      {
        heading: 'Thaw, freeze, collapse (1963–1991)',
        body:
          '• After Cuba scared everyone, détente (easing of tensions) brought a hotline between Washington and Moscow and arms-control treaties (SALT I, 1972).\n• Proxy wars still burned: Vietnam (US forces withdrew 1973; Saigon fell 1975) and the Soviet war in Afghanistan (1979–1989) — each superpower\u2019s costly quagmire.\n• The 1980s endgame: Soviet leader Mikhail Gorbachev (from 1985) introduced glasnost (openness) and perestroika (economic restructuring) to save a stagnating system — and loosened the grip on Eastern Europe.\n• 1989: freed from the threat of Soviet tanks, Eastern Europe\u2019s communist regimes fell one after another; the Berlin Wall was opened and torn down on November 9, 1989.\n• Germany reunified in 1990, and on December 26, 1991, the Soviet Union itself dissolved into fifteen countries. The Cold War ended without the direct superpower war everyone feared.\n\nCanada\u2019s role throughout: founding NATO member; NORAD (the North American air-defence pact with the US, 1958) — because Soviet bombers\u2019 shortest route to the US ran over the Canadian Arctic; Korean War combatant; and frequent peacekeeper in proxy conflicts.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Saying the US and USSR fought each other directly — they never did. Proxy wars (Korea, Vietnam, Afghanistan) are the correct framing, and using the term "proxy war" itself earns credit.\n• Date scrambles: Wall BUILT 1961, Wall FALLS 1989. Blockade 1948, Missile Crisis 1962. NATO 1949, Warsaw Pact 1955 (NATO came first).\n• Confusing the Berlin Blockade (1948–49, airlift, whole city supplied) with the Berlin Wall (1961, concrete barrier through the city).\n• Ideology-free answers: the Cold War was capitalism/democracy vs communism/one-party rule — link events to the ideological stakes or the analysis is hollow.\n• Forgetting Canada: NATO founding member, NORAD partner, Korea combatant. "Canada\u2019s Cold War role" is a stock question.',
        tip: 'Chunk the timeline by decade: 1940s = division (Curtain, Blockade, NATO), 1950s = races (Korea, H-bomb, Sputnik), 1960s = crises (Wall, Cuba), 1970s = détente, 1980s = collapse. Five labels carry fifty facts.',
      },
    ],
    tricks: [
      {
        name: 'Decade labels',
        trick:
          'One word per decade: 40s DIVISION, 50s RACES, 60s CRISES, 70s DÉTENTE, 80s COLLAPSE. Recite the five labels, then hang specific events on them — the whole war compresses into one line.',
      },
      {
        name: 'MAD but stable',
        trick:
          'Mutually Assured Destruction: if either side fires first, both die. The acronym is the argument — the balance of terror was insane AND self-enforcing, which is why the war stayed cold.',
      },
      {
        name: 'Wall up 61, wall down 89',
        trick:
          'The Berlin Wall\u2019s two dates rhyme into memory: UP in \u201961, DOWN in \u201989. Twenty-eight years of concrete bracketing the Cold War\u2019s second half.',
      },
      {
        name: 'Berlin twice',
        trick:
          'Berlin produced TWO separate crises: the BLOCKADE (1948–49 — access cut, beaten by the airlift) and the WALL (1961 — city split by concrete). Blockade is roads, Wall is bricks; a decade apart.',
      },
    ],
  },
  {
    id: 'soc-cdn-government',
    subject: 'social',
    grade: 12,
    title: 'How Canadian Government Works',
    emoji: '🏛️',
    summary:
      'Three levels, three branches, and the exact path a bill walks to become law — the civic machinery every Canadian is governed by and few can actually diagram. You\u2019ll be one who can.',
    sections: [
      {
        heading: 'Three levels of government',
        body:
          'Canada is a federation: the Constitution Act, 1867 (originally the British North America Act) divides powers between levels, so each is supreme in its own lane:\n\n• Federal (Ottawa) — national and cross-border matters: defence, foreign affairs, citizenship and immigration, criminal law, currency, banking.\n• Provincial/territorial — regional matters: education, health care delivery, highways, natural resources, property and civil rights.\n• Municipal (cities and towns) — local services, delegated by the provinces: transit, water, garbage, zoning, fire protection.\n\nWhy it matters practically: pointing at the right level is a core exam skill — schools are provincial, snow removal is municipal, passports are federal. Some files (environment, health funding) are shared, which is where federal–provincial friction lives.',
        tip: 'Territories differ from provinces: their powers are delegated by the federal government rather than guaranteed by the Constitution — a one-line distinction that\u2019s worth a mark surprisingly often.',
      },
      {
        heading: 'Three branches of government',
        body:
          'Canada is a constitutional monarchy AND a parliamentary democracy — the King is head of state (represented by the Governor General), while the prime minister is head of government.\n\n• Executive — proposes and implements policy: the prime minister and Cabinet, formally acting under the Crown. The PM is not directly elected to the job; they lead because their party commands the confidence of the House of Commons.\n• Legislative — makes the laws: Parliament, which has three parts — the House of Commons (343 elected Members of Parliament, one per riding), the Senate (105 senators, APPOINTED on the PM\u2019s advice, serving to age 75), and the Crown.\n• Judicial — interprets the laws, independently of the other branches: the court system, topped by the nine-judge Supreme Court of Canada. Since the Constitution Act, 1982 added the Charter of Rights and Freedoms, courts can strike down laws that violate Charter rights.\n\nKey feature of our system: unlike the US, the executive sits INSIDE the legislature — the PM and most Cabinet ministers are MPs, and a government that loses a confidence vote (like a budget) falls, triggering an election or a new government.',
        tip: 'Executive = proposes and runs, Legislative = debates and passes, Judicial = interprets and reviews. If an exam asks "which branch…", match the verb in the question to one of those six.',
      },
      {
        heading: 'How a bill becomes law',
        body:
          'A bill (a proposed law) must clear every step below. Most bills that pass are government bills, introduced by a Cabinet minister — money bills must start in the House of Commons.\n\n• First reading — the bill is introduced and printed. No debate; it\u2019s a formality.\n• Second reading — MPs debate and vote on the bill IN PRINCIPLE: is the idea worth pursuing?\n• Committee stage — a small group of MPs studies it clause by clause, hears witnesses and experts, and proposes amendments. This is where the detailed work happens.\n• Report stage — the amended bill returns to the full House; further amendments can be moved and voted on.\n• Third reading — final debate and vote on the finished text.\n• The other chamber — the bill goes to the Senate and repeats ALL the same stages there (a Senate bill goes to the Commons instead). If the Senate amends it, the Commons must agree to the changes.\n• Royal assent — the Governor General approves the bill on behalf of the Crown. It is now an Act — law. (Assent has never been refused federally; it is a constitutional formality.)\n\nSome laws also need proclamation — a coming-into-force date set after assent.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Saying Canadians elect the prime minister. You elect your local MP only; the PM is whoever leads the party that holds the confidence of the House.\n• Calling senators elected — they are APPOINTED (by the Governor General on the PM\u2019s advice) and serve until 75. Elected Commons + appointed Senate is a deliberate design: representation plus "sober second thought".\n• Skipping the Senate in bill-becomes-law answers — a bill must pass BOTH chambers before royal assent. Missing the second chamber is the most common diagram error.\n• Confusing levels with branches. Levels = federal/provincial/municipal (WHERE power sits geographically). Branches = executive/legislative/judicial (WHAT KIND of power it is). Every level has its own branches.\n• Forgetting the Charter (1982) when asked how courts check government — Charter review is the modern judiciary\u2019s biggest power.',
      },
    ],
    tricks: [
      {
        name: 'Passport, report card, garbage bin',
        trick:
          'Three objects sort the three levels: passport = federal, report card (schools) = provincial, garbage bin = municipal. Match any government service to one of the objects and you\u2019ve found its level.',
      },
      {
        name: 'Make it, run it, judge it',
        trick:
          'Legislative MAKES the law, executive RUNS the country under it, judicial JUDGES disputes about it. Three verbs, three branches — answer branch questions by finding the verb.',
      },
      {
        name: '1-2-C-R-3, Senate, GG',
        trick:
          'The bill\u2019s path as a chant: first reading, second reading, Committee, Report, third reading — then the whole thing again in the Senate — then the Governor General\u2019s royal assent. Say it five times and the diagram draws itself.',
      },
      {
        name: '343 – 105 – 9',
        trick:
          'The magic numbers of federal government: 343 MPs in the Commons (elected), 105 senators (appointed), 9 Supreme Court justices. Elected, appointed, appointed — descending numbers, descending election.',
      },
    ],
    formulas: [
      'Bill → 1st reading → 2nd reading (principle) → committee → report → 3rd reading → other chamber (all stages again) → royal assent → law',
      'levels: federal / provincial / municipal — branches: executive / legislative / judicial',
      'Parliament = Crown + Senate (105, appointed) + House of Commons (343, elected)',
    ],
  },
  {
    id: 'soc-source-analysis',
    subject: 'social',
    grade: 11,
    title: 'Source Analysis: Cartoons, Quotes & Graphs',
    emoji: '🔎',
    summary:
      'The Social Studies written exam hands you sources — political cartoons, quotations, data — and asks what they mean and how they connect. Here\u2019s the exact method for decoding any source and writing the response.',
    sections: [
      {
        heading: 'What a "source" is and what you\u2019re really being asked',
        body:
          'A source is any piece of evidence expressing a perspective: a political cartoon, a quotation from a speech or book, a photograph, a poster, a graph, or a map.\n\nThe task usually has two layers:\n\n• Interpret each source — what is its main idea, and what perspective on the course concept (globalization, nationalism, liberalism) does it take?\n• Find the relationship — how do the sources speak to each other? Do they agree, oppose, or show different sides of one issue?\n\nThe single most important habit: every source was made by SOMEONE with a viewpoint. Your job is to name that viewpoint and tie it to course ideas — not just describe what you see.',
        tip: 'Never write "this source shows a man holding a flag." That\u2019s description. Write what it ARGUES: "the cartoonist suggests national pride is being used to mask economic problems." Interpretation earns; description doesn\u2019t.',
      },
      {
        heading: 'Decoding each source type',
        body:
          '• Political cartoons — everything is deliberate. Check: labels and captions (read them first), symbols (bears = Russia, doves = peace, chains = oppression), size distortion (bigger = more powerful), and irony (cartoons almost always criticize something). Ask: who or what is the target?\n• Quotations — identify the speaker\u2019s position on the spectrum of the course concept. Underline loaded words ("liberation," "invasion," "progress") — word choice reveals ideology. Ask: would a nationalist, an internationalist, a classical liberal agree with this?\n• Graphs, charts & data — find the trend (rising, falling, gap widening), then ask what perspective the CHOICE of data supports. Data feels neutral but selection never is.\n• Photographs & posters — note what\u2019s framed in and left out, and whether it was made to persuade (propaganda) or record.\n\nFor every source, finish this sentence before writing: "This source would be embraced by someone who believes ______ and criticized by someone who believes ______."',
        tip: 'In cartoons, read all text FIRST (titles, labels, speech bubbles). Cartoonists label exactly the things they don\u2019t trust you to guess — the labels are the skeleton key.',
      },
      {
        heading: 'Structuring the written response',
        body:
          'A reliable structure for the interpret-and-relate assignment:\n\n• Paragraph 1 — Source I: main idea in your own words, the perspective it embodies (tie to course vocabulary: e.g., "a rejection of economic globalization"), and one or two specific details as proof.\n• Paragraph 2 — Source II: same treatment. If it connects to Source I, say so as you go.\n• Paragraph 3 (if three sources) — Source III: same treatment.\n• Final paragraph — the relationship: name the issue all sources address, then map their positions ("Sources I and III defend national interest, while Source II warns where that pursuit leads"). End with one sentence on why the issue matters.\n\nUse course concepts as your labels throughout — perspectives should be named with terms like ultranationalism, self-determination, laissez-faire, collective security, not vague words like "positive" and "negative."',
      },
      {
        heading: 'Where marks are won and lost',
        body:
          'Markers reward:\n\n• Accurate interpretation — you correctly identified what each source argues.\n• Course connection — you linked each source to concepts and examples from the course (historical or current).\n• Relationship thinking — you treated the sources as a conversation, not three isolated paragraphs.\n\nCommon mark-killers:\n\n• Describing instead of interpreting (the #1 killer).\n• Ignoring one source or giving it a single rushed sentence — treat all sources with roughly equal depth.\n• Forcing agreement — sometimes sources genuinely conflict, and saying HOW they conflict is the analysis.\n• No course vocabulary — a response that never says nationalism/globalization/liberalism when those are the course\u2019s core concepts signals you\u2019re winging it.',
        tip: 'Support interpretations with specifics from the source itself ("the label \u2018Made Everywhere\u2019 on the flag suggests...") plus ONE course example (a historical event or thinker). Source detail + course knowledge = full-mark paragraphs.',
      },
    ],
    tricks: [
      {
        name: 'O.P.V.L.',
        trick:
          'For any source ask: Origin (who made it, when?), Purpose (why — persuade, record, mock?), Value (what perspective does it capture?), Limitation (what does it exaggerate or leave out?). Four questions that generate analysis automatically.',
      },
      {
        name: 'The embrace/reject test',
        trick:
          'Finish the sentence: "A __________ would love this source; a __________ would hate it." If you can fill both blanks with course perspectives, you\u2019ve found the source\u2019s position.',
      },
      {
        name: 'Labels first, laughter second',
        trick:
          'Political cartoon order of operations: 1) read every label and caption, 2) identify the symbols, 3) spot the exaggeration, 4) name the target of the criticism. THEN decide what it argues.',
      },
    ],
  },
  {
    id: 'soc-position-paper',
    subject: 'social',
    grade: 12,
    title: 'Writing the Position Paper',
    emoji: '⚖️',
    summary:
      'The big written assignment: take a defensible stand on a course issue and argue it with evidence. Structure, evidence strategy, and how to handle the other side without weakening your own.',
    sections: [
      {
        heading: 'The task: position, not survey',
        body:
          'You\u2019re given a source (often a quotation) and a question like "To what extent should we embrace nationalism?" Your job is to take and defend a POSITION on that question.\n\nThree legitimate stances:\n\n• Agree (embrace it) — with reasons and limits.\n• Disagree (reject it) — with reasons and limits.\n• A qualified middle — "we should embrace it only when..." — often the most defensible, because real issues rarely split cleanly.\n\nWhat you cannot do is fence-sit without a claim ("there are many sides to this issue..."). "To what extent" literally invites you to draw a line — so draw it, clearly, in your introduction, and defend that exact line for the whole paper.',
        tip: 'Convert the prompt into your thesis by answering it in one sentence with a because-clause: "Nations should embrace internationalism to a great extent, because collective problems like climate change and security cannot be solved alone." Specific, arguable, defensible.',
      },
      {
        heading: 'Architecture of the paper',
        body:
          '• Introduction — hook the issue, acknowledge the source\u2019s perspective (agree or disagree with it explicitly), and state your thesis with your line drawn.\n• Argument 1 + evidence — your strongest reason. One paragraph, one reason, proven with specific evidence.\n• Argument 2 + evidence — a second distinct reason (not the first one re-worded).\n• Counterargument + rebuttal — present the strongest case AGAINST your position fairly, then show why it fails or matters less ("Critics argue national interest keeps citizens safe; yet the pursuit of pure national interest in the 1930s produced exactly the insecurity it promised to prevent.")\n• Conclusion — restate the position with its significance: why does getting this right matter for citizens today?\n\nThe counterargument paragraph is not optional decoration — engaging the other side is usually an explicit expectation, and it\u2019s what separates argument from opinion.',
        tip: 'One paragraph = one reason. If a paragraph contains the words "also" or "another reason" halfway through, split it — buried reasons earn no credit because markers can\u2019t see them.',
      },
      {
        heading: 'The evidence game',
        body:
          'A position paper lives or dies on specific evidence. Draw from three wells:\n\n• Course history — the case studies you studied: the World Wars, the Holocaust, Quebec nationalism, residential schools, the Cold War, the EU, the UN. Use names, dates, and outcomes.\n• Current events — recent examples of the concept in action. They show the issue is alive, not museum material.\n• Thinkers and documents — Adam Smith, John Locke, the Universal Declaration of Human Rights, the Charter. A well-placed idea from a thinker adds intellectual weight.\n\nWeak: "Nationalism has caused many wars throughout history."\nStrong: "Ultranationalism transformed the 1930s: Germany\u2019s pursuit of Lebensraum and Japan\u2019s expansion into Manchuria show how loyalty to nation, unchecked, becomes license for conquest."\n\nTwo or three DEVELOPED examples beat six name-drops. Each example needs: what happened, and what it PROVES about your thesis.',
        tip: 'Prep a flexible evidence bank before the exam: 6–8 case studies you know cold. Most course issues (nationalism, liberalism, globalization) can be argued with the same well-understood examples viewed from different angles.',
      },
      {
        heading: 'Voice, judgment, and common traps',
        body:
          'What markers reward most is JUDGMENT: a clear position, defended proportionately, with awareness of complexity.\n\nTraps that sink papers:\n\n• The history dump — retelling events without connecting them to the thesis. Every example must end by serving your argument.\n• The flip-flop — arguing "embrace" in paragraph two and "reject" in paragraph three with no controlling line. Qualified positions are fine; incoherent ones are not.\n• Ignoring the source — the quotation you\u2019re given must be addressed: name its perspective and position yourself relative to it.\n• Moral outrage instead of argument — passion is welcome, but "this is obviously wrong and evil" persuades no one without evidence.\n\nStyle notes: write in confident third person mostly ("the evidence suggests"), define course terms the first time you deploy them, and keep the tone of a lawyer, not a protester.',
        tip: 'End every evidence paragraph with a linking sentence that contains a key word from your thesis. It forces relevance and makes the paper feel relentlessly on-message — which is exactly how top papers read.',
      },
    ],
    tricks: [
      {
        name: 'P.E.C.C. paragraph order',
        trick:
          'Position → Evidence → Counterargument → Conclusion. If you blank on structure under exam pressure, P.E.C.C. rebuilds the whole paper skeleton in ten seconds.',
      },
      {
        name: 'The "to what extent" dial',
        trick:
          'Picture a dial from 0 (fully reject) to 10 (fully embrace). Your thesis is a number on the dial plus the reason: "an 8, because..." You don\u2019t write the number, but deciding it first makes every paragraph consistent.',
      },
      {
        name: 'Steel-man, then swing',
        trick:
          'Present the OPPOSITE view at its strongest (steel-man, not straw-man) before rebutting. "Critics rightly note X... however, Y outweighs it because Z." Fair + firm = top-band argument.',
      },
      {
        name: 'What-proves-what check',
        trick:
          'After each example ask: "What does this PROVE about my thesis?" If the answer isn\u2019t one clean sentence, the example is decoration — cut it or connect it.',
      },
    ],
  },
]
