// import React, { useState } from "react";
// import './MoodTracker.css'

// const CollapsibleSection = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSection = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="collapsible-section">
//       <button onClick={toggleSection} className={isOpen ? "active" : ""}>
//         {title}
//       </button>
//       <div className={`section-content ${isOpen ? "active" : ""}`}>
//         {children}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <CollapsibleSection title="Section 1">
//         <p>Content for section 1</p>
//       </CollapsibleSection>
//       <CollapsibleSection title="Section 2">
//         <p>Content for section 2</p>
//       </CollapsibleSection>
//       <CollapsibleSection title="Section 3">
//         <p>Content for section 3</p>
//       </CollapsibleSection>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./MoodTracker.css";
import { Component } from "react";
import Slider from "react-slick";

const CollapsibleSection = ({ title, children, isActive, onToggle }) => {
  return (
    <div className="section">
      <button className="section-title" onClick={onToggle}>
        {title}
      </button>
      {isActive && <div className="section-content">{children}</div>}
    </div>
  );
};

const App = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(null);

  const handleToggleSection = (index) => {
    setActiveSectionIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <div className="top-header">
      <div className="GitaHeader">
        <h1>
          Better your mood from <strong>Bhagavad-Gita</strong> shlokas
        </h1>
      </div>
      <div className="containerGita">
        <Slider {...settings2}>
          <div>
            <CollapsibleSection
              title="Confusion"
              isActive={activeSectionIndex === 0}
              onToggle={() => handleToggleSection(0)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    When you are confused about your duty and have lost all
                    composure because of miserly weakness, if you become His
                    disciple, and a soul surrendered unto Him, He will instruct
                    you for certain what is best for you. The world situation is
                    such that perplexities of life automatically appear, without
                    our wanting such confusion. It requires us to approach an
                    enlightened spiritual master who can give us proper guidance
                    for executing the purpose of life.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/2/7/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    Sometimes, your intelligence will get bewildered/confused by
                    His instructions of conflicting conclusions. You need to
                    find out decisively which one will be the most beneficial
                    for you. A more organized outline of the path would be
                    necessary for action and understanding. You should try to
                    clear up these apparently confusing matters and accept them
                    without misinterpretation.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/3/2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    The Supreme Lord resides in the hearts of all living
                    entities and by the potency of the material energy is
                    directing their movements, as if they are seated on a
                    machine. Our decisons are confined to our limited
                    discretion, but the Supreme Soul sits in our hearts
                    directing us and witnessing all of our activities. The
                    living entity gets what he deserves according to his
                    actions, and is carried by the material body, which is
                    created in the material energy under the direction of the
                    Supreme Soul.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/18/61/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Discriminated"
              isActive={activeSectionIndex === 1}
              onToggle={() => handleToggleSection(1)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    The truly learned, by virtue of divine knowledge, see
                    everyone with equal vison. They see the Ultimate Truth and
                    are learned in genuine wisdom. We should not make any
                    distinction or discrimination between different people based
                    on their varying traits. The Supreme Lord or Paramātmā
                    exists in everyone's heart. The Supreme Lord is equally kind
                    to everyone because He treats every living being as a friend
                    yet maintains Himself as Paramātmā regardless of the
                    circumstances of the living entities.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/5/18/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    Those whose minds are situated in sameness and equanimity
                    conquer this world in this very life. They are endowed with
                    the equal vision of the Ultimate Truth and are free from all
                    dualities. Equanimity of mind is the sign of
                    self-realization. Those who have actually attained such a
                    stage should be considered to have conquered material
                    conditions, specifically birth and death. As long as one
                    identifies with this body, he is considered a conditioned
                    soul, but as soon as he is elevated to the stage of
                    equanimity through realization of self, he is liberated from
                    conditional life.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/5/19/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    A perfect yogi sees the true equality of all beings, in both
                    their happiness and their distress, by comparision to his
                    own self. In the pursuit of uniting the individual
                    consciousness with the Ultimate Consciousness, we should try
                    to be aware of everyone’s happiness and distress by dint of
                    our own personal experience. The living being who is
                    conditioned by the modes of material nature is subjected to
                    the threefold material miseries due to forgetfulness of his
                    relationship with God.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/6/32/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    The Supreme Lord is equally disposed to all. He does not
                    envy or hate anyone, nor hold anyone dear. He is impartial
                    and there is neither friend or foe to Him. But those who
                    lovingly render devotional service unto Him are in Him and
                    He is inside them.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/9/29/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Laziness"
              isActive={activeSectionIndex === 2}
              onToggle={() => handleToggleSection(2)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    You should perform your prescribed duties and activities,
                    because actions are better than not working at all. One
                    cannot even maintain one's physcial body without work or by
                    ceasing activity. The Lord desires for us to perform our
                    duties without fail and never approves so-called
                    renunciation of work/action.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/3/8/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    Kings and self-realized souls attained perfection by
                    performing prescribed duties. Therefore, one should perform
                    one's work for the sake of educating the people in general.
                    Kings like Janaka were all self-realized souls and had no
                    obligation to perform the prescribed duties in the Vedas.
                    Nonetheless they performed all prescribed activities just to
                    set examples for the people in general, teaching them how to
                    live and how to act.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/3/20/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    There is no possibility of one’s uniting the individual
                    consciousness with the Ultimate Consciousness through yoga,
                    if one eats too much or eats too little, sleeps too much or
                    does not sleep enough. Regulation of diet and sleep is
                    recommended to be able to continue performing one's
                    prescribed duties.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/6/16/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    Hapiness arising from sleep, laziness and illusion which
                    deludes self-realization in the beginning and at the end is
                    said to be of the nature of ignorance. One who takes
                    pleasure in laziness and in sleep is certainly in the mode
                    of darkness, ignorance, and one who has no idea how to act
                    and how not to act is also in the mode of ignorance. For the
                    person in the mode of ignorance, everything is illusion.
                    There is no happiness either in the beginning or at the end.
                    For the person in the mode of passion there might be some
                    kind of ephemeral happiness in the beginning and at the end
                    distress, but for the person in the mode of ignorance there
                    is only distress both in the beginning and at the end.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/18/39/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Pride"
              isActive={activeSectionIndex === 3}
              onToggle={() => handleToggleSection(3)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    Pride, arrogance, conceit, anger, harshness and ignorance –
                    these qualities belong to those of demoniac nature. They are
                    always arrogant or proud in possessing some type of
                    education or so much wealth. They desire to be worshiped by
                    others, and demand respectability, although they do not
                    command respect. Over trifles they become very angry and
                    speak harshly, not gently. They do not know what should be
                    done and what should not be done. They do everything
                    whimsically, according to their own desire, and they do not
                    recognize any authority.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/16/4/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    The demoniac are deluded by ignorance. Such persons think
                    that they are the controller, the enjoyer, and that they are
                    perfect. They think that there is no one as powerful or as
                    happy as them. They have let their pride, arrogance and
                    anger blind their embodied self.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/16/13-15/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    One who performs his duties/actions in a liberated and
                    detached manner (without association with the modes of
                    material nature), without false ego, with great
                    determination and enthusiasm, and unaffected by success or
                    failure is said to be a worker in the nature of goodness.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/18/26/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    If you become conscious of Him, you will overcome all the
                    obstacles and difficulties of conditioned life, by His
                    grace. By doing so, we can avoid being unduly anxious about
                    executing our prescribed duties. If, however, you do not
                    work in such consciousness but act through false ego, not
                    listening to Him, you will be lost.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/18/58/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>
          </div>

          <div>
            <CollapsibleSection
              title="Uncontrolled Mind"
              isActive={activeSectionIndex === 4}
              onToggle={() => handleToggleSection(4)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    The conditioned being must be delivered from material nature
                    by the realized mind. One must deliver himself with the help
                    of his mind, and not degrade himself. The mind is the friend
                    of the conditioned soul, and his enemy as well.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/6/5/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    For him who has conquered the mind, the mind is the best of
                    friends; but for one who has failed to do so, his mind will
                    remain the greatest enemy. We should control the mind by
                    practising yoga in order to make it a friend in discharging
                    the human mission. One who cannot control his mind always
                    lives with the greatest enemy, and thus his life and its
                    mission are spoiled.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/6/6/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    One must certainly restrain and withdraw the restless and
                    unsteady mind from whatever and wherever it wanders, and
                    bring it under the control of the self alone. The nature of
                    the mind is flickering and unsteady. To be self-realized, we
                    have to learn to control the mind. We should not be
                    contolled by the mind and become a servant of the senses.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/6/26/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    It is undoubtedly very difficult to curb and master the
                    fickle mind, but it is possible by diligent practice and
                    detachment from sense enjoyment.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/6/35/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Anger"
              isActive={activeSectionIndex === 5}
              onToggle={() => handleToggleSection(5)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    The sage, whose mind remains undisturbed amid sorrows, whose
                    desires for happiness have altogether disappeared, and who
                    is free from attachment, fear and anger, is called of stable
                    mind. He has surpassed the stage of mental speculations and
                    has come to the conclusion that Lord Śrī Kṛṣṇa, or Vāsudeva,
                    is everything.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/2/56/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    The man dwelling on sense-objects develops attachment for
                    them; from attachment springs up lust (desire), and from
                    such lust (unfulfilled desire) anger arises. One who is not
                    Kṛṣṇa conscious is subjected to material desires while
                    contemplating the objects of the senses. The senses require
                    real engagements, and if they are not engaged in the
                    transcendental loving service of the Lord, they will
                    certainly seek engagement in the service of materialism.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/2/62/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    From anger, complete delusion arises, and from delusion
                    bewilderment of memory. When memory is bewildered,
                    intelligence is lost, and when intelligence is lost one
                    falls down again into the material pool. From loss of
                    reason, one goes to complete ruin.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/2/63/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    Those who are free from lust (material desires) and anger,
                    who are aware of the soul, who are self-realized,
                    self-disciplined and constantly endeavoring for perfection,
                    are assured of liberation in the Supreme (the Ultimate
                    Truth) in the very near future. In the conditioned soul the
                    desire to enjoy the fruitive results of work is so
                    deep-rooted that it is very difficult even for the great
                    sages to control such desires, despite great endeavors. A
                    devotee of the Lord, constantly engaged in devotional
                    service in Kṛṣṇa consciousness, perfect in self-realization,
                    very quickly attains liberation in the Supreme.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/5/26/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    Absolute fearlessness, perfect purity of mind, charity,
                    self-realization, control of the senses, simplicity,
                    non-violence (in thought, word and deed), truthfulness,
                    absence of anger even on provocation, renunciation,
                    compassion, freedom from envy, modesty, forgiveness - these
                    qualities belong to godly men of divine nature.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/16/1-3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    There are three gates leading to hell – lust, anger and
                    greed. Every sane man should give these up, as they bring
                    about the downfall of the soul. One tries to satisfy his
                    lust, and when he cannot, anger and greed arise. A sane man
                    who does not want to glide down to the species of demoniac
                    life must try to give up these three enemies, which can kill
                    the self to such an extent that there will be no possibility
                    of liberation from this material entanglement.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/16/21/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Depression"
              isActive={activeSectionIndex === 6}
              onToggle={() => handleToggleSection(6)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    You should not yield to degrading impotence (inability to
                    take effective action or helplessness). It does not become
                    you. You should give up such petty weakness of heart and
                    arise. Here, Lord Krishna asks an overwhelmed Arjuna to
                    shake off his faint-heartedness and face his enemies.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/2/3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    The interaction of the senses and their sense-objects (sense
                    perception) give rise to the feelings of heat and cold,
                    pleasure and pain, etc. They appear and disappear like the
                    seasons. One must try to endure them without being
                    disturbed. In the proper discharge of duty, one has to learn
                    to tolerate nonpermanent appearances and disappearances of
                    happiness and distress.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/2/14/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    The soul is indestructible, eternal, unborn and immutable.
                    As a man shedding worn-out garments and taking other new
                    ones, the embodied soul, casting off worn-out bodies, enters
                    into others that are new. Everything has its proper utility,
                    and a man who is situated in complete knowledge knows how
                    and where to apply a thing for its proper utility.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/2/21/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Greed"
              isActive={activeSectionIndex === 7}
              onToggle={() => handleToggleSection(7)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    Real knowledge or wisdom develops from the mode of goodness.
                    Greed, undoubtedly develops from the mode of passion. From
                    the mode of ignorance develop foolishness, madness and
                    illusion. When the mode of goodness is developed, people
                    will see things as they are and rise up. In the mode of
                    ignorance, people cannot see things clearly and sink down.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/14/17/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    There are three gates leading to hell – lust, anger and
                    greed. Every sane man should give these up, as they bring
                    about the downfall of the soul. One tries to satisfy his
                    lust, and when he cannot, anger and greed arise. A sane man
                    who does not want to glide down to the species of demoniac
                    life must try to give up these three enemies, which can kill
                    the self to such an extent that there will be no possibility
                    of liberation from this material entanglement.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/16/21/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    With the idea that everything belongs to God, one should
                    perform various acts of sacrifice, penance and charity,
                    without expecting fruitive results or desiring anything in
                    return. The purpose of such transcendental activities is to
                    get free from material entanglement. To be elevated to the
                    spiritual position, one should not act for any material
                    gain.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/17/25/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>
          </div>

          <div>
            <CollapsibleSection
              title="Practicing Forgiveness"
              isActive={activeSectionIndex === 8}
              onToggle={() => handleToggleSection(8)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    You are the Supreme Lord, to be worshiped by every living
                    being. Thus I fall down to offer You my respectful
                    obeisances and ask Your mercy. As a father tolerates the
                    impudence of his son, a friend the impertinence of a friend,
                    or a husband the familiarity of his wife, please tolerate
                    the wrongs I may have done You.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/11/44/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    One who is free from malice and envy towards all beings, but
                    is friendly and compassionate, who is free from the feelings
                    of 'I' and 'mine', and false ego, who is balanced in joy and
                    sorrow, who is tolerant and forgiving, always satisfied,
                    self-controlled, and engaged in devotional service with
                    determination, his mind and intelligence fixed on Him - such
                    a devotee is very dear to Him.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/12/13-14/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    Absolute fearlessness, perfect purity of mind, charity,
                    self-realization, control of the senses, simplicity,
                    non-violence (in thought, word and deed), truthfulness,
                    absence of anger even on provocation, renunciation,
                    compassion, freedom from envy, modesty, forgiveness - these
                    qualities belong to godly men of divine nature.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/16/1-3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Demotivated"
              isActive={activeSectionIndex === 9}
              onToggle={() => handleToggleSection(9)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    Arise and win glory, conquer your foes and enjoy the
                    affluent kingdom. You are just an instrument, executing the
                    Supreme Lord's will or path of action. The whole world is
                    moving according to the plan of the Supreme Personality of
                    Godhead. Foolish persons who do not have sufficient
                    knowledge think that nature is moving without a plan and all
                    manifestations are but accidental formations.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/11/33/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    One should not give up one's innate duty, even though it has
                    a measure of fault. Every undertaking is beset by some evil,
                    just as the fire covered by smoke. Despite flaws in one's
                    work, one should continue to carry out his prescribed
                    duties, for they are born out of his own nature.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/18/48/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    Wherever there is Kṛṣṇa, the master of all mystics, and
                    wherever there is Arjuna, the supreme archer, goodness,
                    victory, glory, extraordinary power, morality and unfailing
                    righteousness will surely be there.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/18/78/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Dealing with Envy"
              isActive={activeSectionIndex === 10}
              onToggle={() => handleToggleSection(10)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    As a pure devotee, remain undisturbed, free from envy or
                    enmity. Accept difficulties as the Lord's mercy. Be calm,
                    patient, kind to all, detached from the body, and satisfied.
                    Follow the instructions, control your senses, and stay fixed
                    in devotional service. The Lord is pleased with your Kṛṣṇa
                    conscious activities.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/12/13-14/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    As a pure devotee, stay peaceful and unaffected, without
                    jealousy or hostility. Embrace challenges as divine
                    blessings. Be serene, patient, compassionate, detached from
                    the body, and content. Obey guidance, master your senses,
                    and stay committed to devotional service. The Lord finds joy
                    in your Krishna-conscious actions.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/16/19/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    As a devotee, understand that the Bhagavad-gītā is meant for
                    devotees and not for the envious of the Lord. However, even
                    non-devotees who are not envious of the Lord can benefit
                    from hearing the teachings and become free from sinful
                    reactions. By being righteous and performing devotional
                    service, even those who are not pure can attain the
                    planetary system of the polestar where Dhruva Mahārāja is
                    presiding.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/18/71/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Fear"
              isActive={activeSectionIndex === 11}
              onToggle={() => handleToggleSection(11)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    For those who are deeply entangled in materialism,
                    understanding the personal nature of the Supreme Absolute
                    Truth is extremely challenging. Materialists cannot fathom
                    the existence of an imperishable, knowledgeable, and
                    eternally blissful transcendental body. They perceive the
                    material manifestation as supreme and believe the Supreme to
                    be impersonal. The idea of retaining individuality after
                    liberation frightens them, leading them to prefer merging
                    into an impersonal void. Some even deny spiritual existence
                    altogether, concluding everything is void. To overcome these
                    misconceptions, one must take shelter of the Lord, guided by
                    a bona fide spiritual master, and embrace devotional life,
                    culminating in transcendental love for God.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/4/10/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    When Kṛṣṇa appeared as the son of Vasudeva and Devakī, He
                    initially appeared as four-armed Nārāyaṇa. However, Kṛṣṇa
                    transformed into an ordinary child in appearance upon the
                    request of His parents. Similarly, Kṛṣṇa showed Arjuna His
                    four-handed form upon his request and then revealed His
                    beautiful form of Kṛṣṇa, which only those with eyes smeared
                    with love can see.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/11/50/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    You should perform actions according to the directions given
                    in the scriptures. This is known as pravṛtti, the proper
                    execution of actions. Actions that are not in accordance
                    with the scriptures should be avoided. If you act without
                    knowledge of the scriptural directions, you will become
                    entangled in the consequences of your actions.
                    Discriminating understanding, guided by intelligence, is
                    situated in the mode of goodness.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/18/30/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>
          </div>

          <div>
            <CollapsibleSection
              title="Loneliness"
              isActive={activeSectionIndex === 12}
              onToggle={() => handleToggleSection(12)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    In Kṛṣṇa consciousness, you see Lord Kṛṣṇa everywhere and
                    everything in Kṛṣṇa. Though you perceive the material
                    manifestations, you remain aware that everything is Kṛṣṇa's
                    energy. Kṛṣṇa is the Lord of everything, and this
                    understanding forms the foundation of Kṛṣṇa consciousness.
                    It transcends material liberation and leads to love for
                    Kṛṣṇa. In this state, you become one with Kṛṣṇa,
                    experiencing an intimate relationship. Devotees are never
                    annihilated, and Kṛṣṇa is always present for them.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/6/30/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    You may wonder why Krishna shows special interest in His
                    devotees if He is equal to everyone. This is not
                    discrimination; it's natural. Just as a person cares more
                    for their own children, Krishna, as the loving father, cares
                    for every living entity. He provides for all, like rain
                    falling everywhere. However, devotees who are always in
                    Krishna consciousness receive His specific attention. They
                    are situated in Krishna, and He reciprocates their love.
                    This reciprocal relationship is the essence of personalist
                    philosophy. In devotional service, the Lord's special mercy
                    is manifested, surpassing the laws of karma. It is a
                    spiritual activity where eternity, bliss, and knowledge
                    prevail.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/9/29/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    " You can understand from Vedic literature that the Supreme
                    Person, Narayana, resides within every living being. He is
                    present in both the spiritual and material realms, despite
                    being far away. We cannot perceive His enjoyment with our
                    material senses. Only by purifying our mind and senses
                    through Krishna consciousness can we constantly see Him.
                    Devotional service allows us to see and understand Him, as
                    confirmed in both the Brahma-samhita and Bhagavad-gita."
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/13/16/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    The Supreme Personality of Godhead, known as the Supersoul,
                    is the source of light in the sun, moon, and stars. In the
                    spiritual realm, His effulgence illuminates everything,
                    rendering the need for external sources of light
                    unnecessary. His knowledge is transcendental, and to attain
                    liberation, one must surrender to Him. The Supersoul is
                    present in everyone's heart, controlling and pervading all.
                    Unlike the individual soul, the Supersoul's influence
                    extends everywhere. Thus, it is evident that the Supersoul
                    and the individual soul are distinct entities.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/13/18/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Seeking Peace"
              isActive={activeSectionIndex === 13}
              onToggle={() => handleToggleSection(13)}
            >
              <Slider {...settings}>
                <div>
                  <p>
                    Unless you are in Kṛṣṇa consciousness, you cannot find
                    peace. When you realize that Kṛṣṇa is the only enjoyer, the
                    owner of everything, and the true friend of all beings, then
                    you can attain real peace. Without a connection to Kṛṣṇa,
                    your mind will lack a final goal, leading to disturbance.
                    Only by understanding that Kṛṣṇa is the source of peace can
                    you truly experience it. Those who are not in Kṛṣṇa
                    consciousness are always distressed, despite their outward
                    display of peace and spiritual progress. Achieving Kṛṣṇa
                    consciousness brings about self-manifested peace through a
                    relationship with Kṛṣṇa.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/2/66/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    To be desireless means not seeking sensual gratification.
                    True desirelessness is desiring Kṛṣṇa consciousness.
                    Understand that you are an eternal servant of Kṛṣṇa, not
                    this temporary body or worldly possessions. Use everything
                    for Kṛṣṇa's satisfaction because He is the proprietor of
                    everything. Arjuna fought for Kṛṣṇa's satisfaction, not for
                    his own desires. Real desirelessness is desiring to please
                    Kṛṣṇa, not eradicating all desires. Know that everything
                    belongs to Kṛṣṇa and realize your eternal spiritual identity
                    as His part and parcel. This understanding brings true
                    peace.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/2/71/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    You can attain knowledge in Kṛṣṇa consciousness by having
                    unwavering faith in Kṛṣṇa. By acting in Kṛṣṇa consciousness
                    and engaging in devotional service and chanting the Hare
                    Kṛṣṇa mantra, you can purify your heart. Control your senses
                    and remain faithful to Kṛṣṇa to quickly achieve perfection
                    in Kṛṣṇa consciousness.` `
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/4/39/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    You seek peace in the material world, but lack the formula
                    for it. Here it is: Offer everything to Lord Kṛṣṇa, the
                    ultimate beneficiary. He owns all planets and demigods. No
                    one surpasses Him. Trying to be lords, we are actually
                    controlled by material energy. Understand this to find peace
                    individually and collectively. Kṛṣṇa consciousness means
                    recognizing Kṛṣṇa as the supreme predominator. Work with
                    this knowledge to attain liberation. Bhakti-yoga in Kṛṣṇa
                    consciousness leads to perfection and freedom from material
                    influence. Control your senses and desires. Kṛṣṇa
                    consciousness is the highest perfection of life, granting
                    ultimate peace.
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/5/29/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p>
                    " To understand the teachings of the Bhagavad-gītā, study
                    under a spiritual master and follow Vedic principles. Start
                    as a brahmacārī, living humbly and studying until adulthood.
                    Then enter household life, perform sacrifices, and practice
                    charity. After retiring, embrace vānaprastha and engage in
                    severe penances. By following these stages, one can reach
                    perfection. However, Kṛṣṇa consciousness offers a direct
                    path, surpassing all rituals. Learn Bhagavad-gītā from a
                    devotee, and through devotional service, clear doubts,
                    attain fixed study, and develop deep love for Kṛṣṇa. This
                    leads to eternal happiness in Kṛṣṇa's spiritual abode."
                  </p>
                  <a
                    href="https://vedabase.io/en/library/bg/8/28/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Lust"
              isActive={activeSectionIndex === 14}
              onToggle={() => handleToggleSection(14)}
            >
              <Slider {...settings}>
                <div>
                  <p></p>
                  <a
                    href="https://vedabase.io/en/library/bg/3/37/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a
                    href="https://vedabase.io/en/library/bg/3/41/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a
                    href="https://vedabase.io/en/library/bg/3/43/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a
                    href="https://vedabase.io/en/library/bg/5/22/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a
                    href="https://vedabase.io/en/library/bg/16/21/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Death of Loved One"
              isActive={activeSectionIndex === 15}
              onToggle={() => handleToggleSection(15)}
            >
              <Slider {...settings}>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>
          </div>

          <div>
            <CollapsibleSection
              title="Feeling Sinful"
              isActive={activeSectionIndex === 16}
              onToggle={() => handleToggleSection(16)}
            >
              <Slider {...settings}>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Losing Hope"
              isActive={activeSectionIndex === 17}
              onToggle={() => handleToggleSection(17)}
            >
              <Slider {...settings}>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Temptation"
              isActive={activeSectionIndex === 18}
              onToggle={() => handleToggleSection(18)}
            >
              <Slider {...settings}>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>

            <CollapsibleSection
              title="Forgetfulness"
              isActive={activeSectionIndex === 19}
              onToggle={() => handleToggleSection(19)}
            >
              <Slider {...settings}>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
                <div>
                  <p></p>
                  <a href="" target="_blank" rel="noreferrer">
                    <h5>Read More</h5>
                  </a>
                </div>
              </Slider>
            </CollapsibleSection>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default App;
