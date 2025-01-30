const natural=require("natural");
const classifier = new natural.BayesClassifier();
//const tokenizer=new natural.tokenizer();
// Feelings of Loss and Grief
classifier.addDocument('I feel lost without them.', 'loss_grief');
classifier.addDocument('I miss their voice so much.', 'loss_grief');
classifier.addDocument('It’s like a part of me is gone.', 'loss_grief');
classifier.addDocument('It’s hard to breathe when they’re not around.', 'loss_grief');
classifier.addDocument('I wish I could go back to before.', 'loss_grief');
classifier.addDocument('The silence is deafening.', 'loss_grief');
classifier.addDocument('I can’t believe they’re really gone.', 'loss_grief');
classifier.addDocument('Everything feels emptier without you.', 'loss_grief');
classifier.addDocument('Why did this have to happen?', 'loss_grief');
classifier.addDocument('I’m struggling to accept this loss.', 'loss_grief');

// Emotional Distance and Isolation
classifier.addDocument('No one understands me anymore.', 'isolation');
classifier.addDocument('I feel invisible.', 'isolation');
classifier.addDocument('It feels like no one cares.', 'isolation');
classifier.addDocument('I’m all alone, even when surrounded by people.', 'isolation');
classifier.addDocument('I wish someone would notice how I feel.', 'isolation');
classifier.addDocument('There’s a wall between me and the rest of the world.', 'isolation');
classifier.addDocument('I feel like I’m fading into the background.', 'isolation');
classifier.addDocument('Loneliness has become my companion.', 'isolation');
classifier.addDocument('No matter how hard I try, I always feel distant.', 'isolation');
classifier.addDocument('I’m drifting farther away from everyone.', 'isolation');

// Overwhelm and Hopelessness
classifier.addDocument('Everything just feels too much to handle.', 'overwhelm');
classifier.addDocument('I can’t escape this storm in my mind.', 'overwhelm');
classifier.addDocument('I don’t know how much longer I can hold on.', 'overwhelm');
classifier.addDocument('I’m drowning in my own emotions.', 'overwhelm');
classifier.addDocument('I feel trapped in my own life.', 'overwhelm');
classifier.addDocument('Every day feels like a battle I’m losing.', 'overwhelm');
classifier.addDocument('I’ve given up trying to change things.', 'overwhelm');
classifier.addDocument('There’s no way out of this pain.', 'overwhelm');
classifier.addDocument('I’m stuck in an endless loop of despair.', 'overwhelm');
classifier.addDocument('It feels like nothing will ever get better.', 'overwhelm');

// Regret and Self-Doubt
classifier.addDocument('I keep replaying my mistakes in my mind.', 'regret_selfdoubt');
classifier.addDocument('I should’ve done better, but I failed.', 'regret_selfdoubt');
classifier.addDocument('I regret not saying more when I had the chance.', 'regret_selfdoubt');
classifier.addDocument('Why can’t I ever get it right?', 'regret_selfdoubt');
classifier.addDocument('I feel like I’ll never be enough.', 'regret_selfdoubt');
classifier.addDocument('Every decision I make feels like a mistake.', 'regret_selfdoubt');
classifier.addDocument('I can’t stop blaming myself.', 'regret_selfdoubt');
classifier.addDocument('I’m ashamed of who I’ve become.', 'regret_selfdoubt');
classifier.addDocument('I don’t think I can fix what’s broken.', 'regret_selfdoubt');
classifier.addDocument('I always let everyone down.', 'regret_selfdoubt');

// Hopeless Reflection
classifier.addDocument('Everything feels pointless now.', 'hopeless_reflection');
classifier.addDocument('I don’t know why I keep trying.', 'hopeless_reflection');
classifier.addDocument('I’ve lost the will to move forward.', 'hopeless_reflection');
classifier.addDocument('Dreams don’t seem important anymore.', 'hopeless_reflection');
classifier.addDocument('There’s no light at the end of this tunnel.', 'hopeless_reflection');
classifier.addDocument('I’ve given up on happiness.', 'hopeless_reflection');
classifier.addDocument('There’s nothing left for me.', 'hopeless_reflection');
classifier.addDocument('I feel like I’m just existing, not living.', 'hopeless_reflection');
classifier.addDocument('I can’t find the strength to keep going.', 'hopeless_reflection');
classifier.addDocument('I’m stuck, waiting for things to change—but they don’t.', 'hopeless_reflection');

// Regret in Relationships
classifier.addDocument('I should’ve fought harder for us.', 'relationship_regret');
classifier.addDocument('We’ve grown too far apart.', 'relationship_regret');
classifier.addDocument('It hurts to see them move on without me.', 'relationship_regret');
classifier.addDocument('I never should’ve let them go.', 'relationship_regret');
classifier.addDocument('We’ve lost what we once had.', 'relationship_regret');
classifier.addDocument('There’s too much distance between us now.', 'relationship_regret');
classifier.addDocument('I don’t think we’ll ever find our way back.', 'relationship_regret');
classifier.addDocument('I regret the words I didn’t say.', 'relationship_regret');
classifier.addDocument('I feel like I’ve failed them.', 'relationship_regret');
classifier.addDocument('Our love faded, and I can’t bring it back.', 'relationship_regret');

// Inner Conflict and Uncertainty
classifier.addDocument('I don’t even know who I am anymore.', 'inner_conflict');
classifier.addDocument('I feel like I’m lying to myself.', 'inner_conflict');
classifier.addDocument('I don’t know how to fix what’s inside me.', 'inner_conflict');
classifier.addDocument('My thoughts are scattered and lost.', 'inner_conflict');
classifier.addDocument('I can\'t decide if I’m happy or sad.', 'inner_conflict');
classifier.addDocument('I don’t recognize myself in the mirror.', 'inner_conflict');
classifier.addDocument('I’m torn between what I want and what’s right.', 'inner_conflict');
classifier.addDocument('I’m haunted by choices I can\'t undo.', 'inner_conflict');
classifier.addDocument('I feel confused about everything in my life.', 'inner_conflict');
classifier.addDocument('Every step I take feels like the wrong one.', 'inner_conflict');

// Self-Worth and Lack of Validation
classifier.addDocument('I don’t think I’ll ever feel good enough.', 'selfworth_validation');
classifier.addDocument('No matter what I do, it’s never enough.', 'selfworth_validation');
classifier.addDocument('I feel like I’m failing at everything.', 'selfworth_validation');
classifier.addDocument('Why can’t anyone see what I’ve done?', 'selfworth_validation');
classifier.addDocument('No one acknowledges my efforts.', 'selfworth_validation');
classifier.addDocument('I don’t matter to anyone.', 'selfworth_validation');
classifier.addDocument('It feels like I’m invisible in this world.', 'selfworth_validation');
classifier.addDocument('I keep wondering what’s wrong with me.', 'selfworth_validation');
classifier.addDocument('Why does it feel like I’m always unnoticed?', 'selfworth_validation');
classifier.addDocument('I can’t seem to find my value anywhere.', 'selfworth_validation');

// General Disillusionment
classifier.addDocument('Life doesn’t seem worth the effort anymore.', 'disillusionment');
classifier.addDocument('Everything I once believed in feels like a lie.', 'disillusionment');
classifier.addDocument('It feels like I’m always waiting for something that never comes.', 'disillusionment');
classifier.addDocument('I just don’t feel excited about anything anymore.', 'disillusionment');
classifier.addDocument('The world seems so bleak and gray.', 'disillusionment');
classifier.addDocument('It’s hard to find joy in anything anymore.', 'disillusionment');
classifier.addDocument('Things I once loved don’t bring me happiness now.', 'disillusionment');
classifier.addDocument('I feel disconnected from everything around me.', 'disillusionment');
classifier.addDocument('I can’t stop feeling like I’m walking through a fog.', 'disillusionment');
classifier.addDocument('Even my happiest memories feel distant now.', 'disillusionment');

// Emotional Fatigue
classifier.addDocument('I’m exhausted by my own emotions.', 'emotional_fatigue');
classifier.addDocument('It’s too tiring to keep pretending I’m okay.', 'emotional_fatigue');
classifier.addDocument('I can’t remember the last time I felt truly rested.', 'emotional_fatigue');
classifier.addDocument('I feel emotionally drained and weak.', 'emotional_fatigue');
classifier.addDocument('Sometimes it feels like I don’t have the energy to care.', 'emotional_fatigue');
classifier.addDocument('I just need to stop for a while and let everything go.', 'emotional_fatigue');
classifier.addDocument('The constant emotional battles are taking a toll on me.', 'emotional_fatigue');
classifier.addDocument('It’s been so long since I felt energized or alive.', 'emotional_fatigue');
classifier.addDocument('My mind won’t stop racing, and I’m too tired to catch up.', 'emotional_fatigue');
classifier.addDocument('I feel like I’m running on empty.', 'emotional_fatigue');
          




















// Happiness and Joy
classifier.addDocument('I feel like I’m walking on sunshine today.', 'happiness_joy');
classifier.addDocument('Everything feels so right in this moment.', 'happiness_joy');
classifier.addDocument('I’m filled with joy that I can\'t quite explain.', 'happiness_joy');
classifier.addDocument('The world looks brighter today.', 'happiness_joy');
classifier.addDocument('I’m grateful for the happiness in my life.', 'happiness_joy');
classifier.addDocument('This moment feels like a dream come true.', 'happiness_joy');
classifier.addDocument('It’s hard not to smile when I’m this happy.', 'happiness_joy');
classifier.addDocument('Every little thing seems perfect today.', 'happiness_joy');
classifier.addDocument('Today is one of the best days I’ve had.', 'happiness_joy');
classifier.addDocument('My heart feels light and full of joy.', 'happiness_joy');

// Love and Connection
classifier.addDocument('I feel deeply loved and cared for.', 'love_connection');
classifier.addDocument('There’s warmth in every word you say.', 'love_connection');
classifier.addDocument('I’m so lucky to have these amazing people in my life.', 'love_connection');
classifier.addDocument('Love surrounds me, and it feels so comforting.', 'love_connection');
classifier.addDocument('I cherish every moment I spend with you.', 'love_connection');
classifier.addDocument('I can’t believe how lucky I am to know you.', 'love_connection');
classifier.addDocument('I feel a deep connection with the people around me.', 'love_connection');
classifier.addDocument('My heart is full of gratitude for the love I receive.', 'love_connection');
classifier.addDocument('Every smile from you brightens my day.', 'love_connection');
classifier.addDocument('Love makes everything seem better.', 'love_connection');

// Peace and Calm
classifier.addDocument('Everything feels so peaceful today.', 'peace_calm');
classifier.addDocument('My mind is at ease, and I can relax.', 'peace_calm');
classifier.addDocument('There’s a quiet serenity in my heart.', 'peace_calm');
classifier.addDocument('I feel calm in the stillness of this moment.', 'peace_calm');
classifier.addDocument('The world has slowed down, and I feel at peace.', 'peace_calm');
classifier.addDocument('The worries of the day have melted away.', 'peace_calm');
classifier.addDocument('In this moment, all feels right and calm.', 'peace_calm');
classifier.addDocument('My heart beats calmly, and everything is okay.', 'peace_calm');
classifier.addDocument('There’s a gentle peace that fills the air today.', 'peace_calm');
classifier.addDocument('I feel grounded and centered in the present.', 'peace_calm');

// Self-Acceptance and Confidence
classifier.addDocument('I am proud of the person I’m becoming.', 'self_acceptance_confidence');
classifier.addDocument('I feel good about who I am.', 'self_acceptance_confidence');
classifier.addDocument('I embrace my imperfections with love.', 'self_acceptance_confidence');
classifier.addDocument('Confidence radiates from within me.', 'self_acceptance_confidence');
classifier.addDocument('I believe in my abilities and strengths.', 'self_acceptance_confidence');
classifier.addDocument('I accept myself exactly as I am.', 'self_acceptance_confidence');
classifier.addDocument('I am worthy of all the good things life has to offer.', 'self_acceptance_confidence');
classifier.addDocument('I’m becoming more and more comfortable in my own skin.', 'self_acceptance_confidence');
classifier.addDocument('My heart is open to love and kindness.', 'self_acceptance_confidence');
classifier.addDocument('I trust myself to make the right choices.', 'self_acceptance_confidence');

// Gratitude and Appreciation
classifier.addDocument('I am grateful for the simple things in life.', 'gratitude_appreciation');
classifier.addDocument('Each day, I find something new to be thankful for.', 'gratitude_appreciation');
classifier.addDocument('I appreciate the people who make my life richer.', 'gratitude_appreciation');
classifier.addDocument('I’m grateful for the beauty around me.', 'gratitude_appreciation');
classifier.addDocument('Thank you for being part of my life.', 'gratitude_appreciation');
classifier.addDocument('I’m so thankful for today’s blessings.', 'gratitude_appreciation');
classifier.addDocument('My heart is full of gratitude for this moment.', 'gratitude_appreciation');
classifier.addDocument('I feel lucky and blessed to have this life.', 'gratitude_appreciation');
classifier.addDocument('The little things in life bring me the most joy.', 'gratitude_appreciation');
classifier.addDocument('I appreciate all the wonderful moments in my life.', 'gratitude_appreciation');

// Optimism and Hope
classifier.addDocument('I believe good things are coming my way.', 'optimism_hope');
classifier.addDocument('There’s always light at the end of the tunnel.', 'optimism_hope');
classifier.addDocument('I trust the journey, even when I don\'t understand it.', 'optimism_hope');
classifier.addDocument('Each day is a new opportunity for happiness.', 'optimism_hope');
classifier.addDocument('I’m excited for what tomorrow brings.', 'optimism_hope');
classifier.addDocument('I look forward to new beginnings and opportunities.', 'optimism_hope');
classifier.addDocument('I know everything will work out in the end.', 'optimism_hope');
classifier.addDocument('I’m hopeful for the future and its possibilities.', 'optimism_hope');
classifier.addDocument('There’s so much more to discover, and I’m ready.', 'optimism_hope');
classifier.addDocument('I am filled with hope and determination for the future.', 'optimism_hope');

// Kindness and Generosity
classifier.addDocument('I feel good when I help others.', 'kindness_generosity');
classifier.addDocument('Every act of kindness makes the world a little better.', 'kindness_generosity');
classifier.addDocument('I enjoy spreading positivity and happiness.', 'kindness_generosity');
classifier.addDocument('It feels amazing to make someone\'s day a little brighter.', 'kindness_generosity');
classifier.addDocument('Generosity fills my heart with joy.', 'kindness_generosity');
classifier.addDocument('I love making others feel special.', 'kindness_generosity');
classifier.addDocument('I feel fulfilled when I support those I care about.', 'kindness_generosity');
classifier.addDocument('The world is a better place when we help each other.', 'kindness_generosity');
classifier.addDocument('Sharing joy is the greatest gift.', 'kindness_generosity');
classifier.addDocument('Kindness is the language that makes life meaningful.', 'kindness_generosity');

// Growth and Achievement
classifier.addDocument('I’m proud of the progress I’ve made.', 'growth_achievement');
classifier.addDocument('Every step forward is a step closer to my dreams.', 'growth_achievement');
classifier.addDocument('I’ve overcome challenges I never thought possible.', 'growth_achievement');
classifier.addDocument('Success feels like the result of hard work and persistence.', 'growth_achievement');
classifier.addDocument('I feel so proud of the growth I’ve experienced.', 'growth_achievement');
classifier.addDocument('I’m continuously learning and evolving.', 'growth_achievement');
classifier.addDocument('Every day is an opportunity to improve myself.', 'growth_achievement');
classifier.addDocument('I see my challenges as opportunities to grow.', 'growth_achievement');
classifier.addDocument('With each challenge, I grow stronger and wiser.', 'growth_achievement');
classifier.addDocument('I believe in my ability to accomplish my goals.', 'growth_achievement');

// Laughter and Fun
classifier.addDocument('Laughter fills the air, and it’s contagious.', 'laughter_fun');
classifier.addDocument('Today was full of fun and laughter.', 'laughter_fun');
classifier.addDocument('I love moments that make me laugh so hard I can’t stop.', 'laughter_fun');
classifier.addDocument('There’s joy in every funny moment.', 'laughter_fun');
classifier.addDocument('Laughter is the best way to brighten up the day.', 'laughter_fun');
classifier.addDocument('I’m surrounded by people who know how to have fun.', 'laughter_fun');
classifier.addDocument('Today, I’m embracing the joy of being silly.', 'laughter_fun');
classifier.addDocument('Laughter reminds me of all the good times I’ve had.', 'laughter_fun');
classifier.addDocument('There’s always time for a good laugh and a fun moment.', 'laughter_fun');
classifier.addDocument('Laughter makes life feel a little lighter and a lot better.', 'laughter_fun');

// Adventure and Exploration
classifier.addDocument('The world is full of new adventures waiting to be explored.', 'adventure_exploration');
classifier.addDocument('Every journey offers new experiences and lessons.', 'adventure_exploration');
classifier.addDocument('I’m excited for the places I’ll visit and the people I’ll meet.', 'adventure_exploration');
classifier.addDocument('I can’t wait to explore more of what life has to offer.', 'adventure_exploration');
classifier.addDocument('Each new experience brings a sense of excitement.', 'adventure_exploration');
classifier.addDocument('Adventure fills me with energy and curiosity.', 'adventure_exploration');
classifier.addDocument('I’m ready to dive into new experiences and explore.', 'adventure_exploration');
classifier.addDocument('Every trip, big or small, feels like an exciting adventure.', 'adventure_exploration');
classifier.addDocument('Life is an adventure, and I’m ready to enjoy the ride.', 'adventure_exploration');
classifier.addDocument('Exploring new places is one of my greatest joys.', 'adventure_exploration');

//introductions 

classifier.addDocument('Hello, my name is Sunil.', 'introduction');
classifier.addDocument('Good morning, I am excited to join this team.', 'introduction');
classifier.addDocument('Allow me to introduce myself, I am Alex.', 'introduction');
classifier.addDocument('Hi! I’m Sarah. Nice to meet you.', 'introduction');
classifier.addDocument('I’m Sunil, studying computer science at KLE Tech.', 'introduction');
classifier.addDocument('Let me introduce myself: I am a software developer.', 'introduction');
classifier.addDocument('I’d like to take a moment to introduce myself.', 'introduction');
classifier.addDocument('Hello everyone, I’m a first-year student here.', 'introduction');
classifier.addDocument('Let me tell you a bit about who I am.', 'introduction');
classifier.addDocument('Hi, I’m a backend developer, and I work on APIs.', 'introduction');
classifier.addDocument('Nice to meet you, I’m Kevin, and I’ll be presenting today.', 'introduction');
classifier.addDocument('My name is John, and I’m the project lead for this team.', 'introduction');
classifier.addDocument('I’d like to start by introducing myself.', 'introduction');
classifier.addDocument('Allow me to share a little about my background.', 'introduction');
classifier.addDocument('Hello, I am here as a representative of my college.', 'introduction');
classifier.addDocument('Hi, I’m an engineering student specializing in electronics.', 'introduction');
classifier.addDocument('Let’s begin by getting to know each other. I’ll start.', 'introduction');
classifier.addDocument('Allow me to formally introduce myself.', 'introduction');
classifier.addDocument('Good afternoon, I am here to discuss my project work.', 'introduction');
classifier.addDocument('Hello, I work as a frontend developer for a tech startup.', 'introduction');
   
//sadness

classifier.addDocument('I feel lonely and broken.', 'sadness');
classifier.addDocument('Every day seems darker than the last.', 'sadness');
classifier.addDocument('I feel hopeless and lost.', 'sadness');
classifier.addDocument('Why does life feel so hard sometimes?', 'sadness');
classifier.addDocument('I can’t stop crying over what happened.', 'sadness');
classifier.addDocument('This emptiness is overwhelming.', 'sadness');
classifier.addDocument('Life feels meaningless right now.', 'sadness');
classifier.addDocument('The sadness in my heart never goes away.', 'sadness');
classifier.addDocument('I feel abandoned and unloved.', 'sadness');
classifier.addDocument('I haven’t smiled in weeks.', 'sadness');
classifier.addDocument('It feels like the world is against me.', 'sadness');
classifier.addDocument('My tears just won’t stop falling.', 'sadness');
classifier.addDocument('I feel like nothing can make me happy again.', 'sadness');
classifier.addDocument('The pain I’m feeling is unbearable.', 'sadness');
classifier.addDocument('Everything around me feels empty.', 'sadness');
classifier.addDocument('I feel like giving up on everything.', 'sadness');
classifier.addDocument('There is no light at the end of my tunnel.', 'sadness');
classifier.addDocument('I feel like the sadness is consuming me.', 'sadness');
classifier.addDocument('My heart feels heavy all the time.', 'sadness');
classifier.addDocument('Nothing brings me joy anymore.', 'sadness');



//happiness


classifier.addDocument('This is the happiest day of my life!', 'happiness');
classifier.addDocument('I feel so joyful and blessed today.', 'happiness');
classifier.addDocument('What an amazing experience this has been!', 'happiness');
classifier.addDocument('The sun is shining, and everything feels perfect.', 'happiness');
classifier.addDocument('I am filled with immense gratitude and joy.', 'happiness');
classifier.addDocument('Life feels so wonderful right now.', 'happiness');
classifier.addDocument('I’m so excited about what the future holds.', 'happiness');
classifier.addDocument('Being with my loved ones makes me so happy.', 'happiness');
classifier.addDocument('The laughter in the room is infectious.', 'happiness');
classifier.addDocument('I can’t stop smiling today.', 'happiness');
classifier.addDocument('I am overjoyed to share this moment with everyone.', 'happiness');
classifier.addDocument('This accomplishment means the world to me!', 'happiness');
classifier.addDocument('Life couldn’t get better than this!', 'happiness');
classifier.addDocument('I’m so thankful for all the blessings in my life.', 'happiness');
classifier.addDocument('This celebration is filled with joy and love.', 'happiness');
classifier.addDocument('Today is truly a day to remember!', 'happiness');
classifier.addDocument('I’m in love with the beauty around me.', 'happiness');
classifier.addDocument('I feel like I’m on top of the world!', 'happiness');
classifier.addDocument('This moment is filled with pure bliss.', 'happiness');
classifier.addDocument('Every day feels brighter and better.', 'happiness');


//loss grief

classifier.addDocument('I miss them so much it hurts.', 'loss_grief');
classifier.addDocument('The pain of losing them is unbearable.', 'loss_grief');
classifier.addDocument('Life feels empty without them.', 'loss_grief');
classifier.addDocument('I can’t imagine life without them.', 'loss_grief');
classifier.addDocument('Their memory brings tears to my eyes.', 'loss_grief');
classifier.addDocument('This loss feels like a piece of my heart is missing.', 'loss_grief');
classifier.addDocument('The grief is consuming me entirely.', 'loss_grief');
classifier.addDocument('I can’t believe they’re really gone.', 'loss_grief');
classifier.addDocument('My heart aches every day because of this loss.', 'loss_grief');
classifier.addDocument('The hole they left behind will never be filled.', 'loss_grief');
classifier.addDocument('Their absence is unbearable.', 'loss_grief');
classifier.addDocument('I feel shattered after losing them.', 'loss_grief');
classifier.addDocument('Their loss has left a permanent void in my life.', 'loss_grief');
classifier.addDocument('I cry myself to sleep thinking about them.', 'loss_grief');
classifier.addDocument('I can’t move on from their passing.', 'loss_grief');
classifier.addDocument('This grief feels like a weight I can’t lift.', 'loss_grief');
classifier.addDocument('Every day without them is a struggle.', 'loss_grief');
classifier.addDocument('They were my everything, and now they’re gone.', 'loss_grief');
classifier.addDocument('This tragedy is something I can’t recover from.', 'loss_grief');
classifier.addDocument('I don’t know how to live with this loss.', 'loss_grief');



//query


classifier.addDocument('Where is the nearest hospital?', 'query');
classifier.addDocument('How can I reset my password?', 'query');
classifier.addDocument('Can you guide me to the registration desk?', 'query');
classifier.addDocument('What time does the event start?', 'query');
classifier.addDocument('How do I access the online portal?', 'query');
classifier.addDocument('Could you explain this process to me?', 'query');
classifier.addDocument('What’s the fastest way to reach the venue?', 'query');
classifier.addDocument('Can someone help me with the Wi-Fi password?', 'query');
classifier.addDocument('How do I navigate to the contact page?', 'query');
classifier.addDocument('Where can I find the official schedule?', 'query');
classifier.addDocument('What’s the deadline for submitting this form?', 'query');
classifier.addDocument('Can I register online for the event?', 'query');
classifier.addDocument('How do I check the status of my application?', 'query');
classifier.addDocument('Where is the bus stop for route 10?', 'query');
classifier.addDocument('What is the easiest way to get a ticket?', 'query');
classifier.addDocument('Can you help me locate the library on campus?', 'query');
classifier.addDocument('Where should I submit my assignment?', 'query');
classifier.addDocument('What’s the duration of the program?', 'query');
classifier.addDocument('Can I find more details on the official website?', 'query');
classifier.addDocument('Who should I contact for further information?', 'query');






classifier.train();

 function check(string){
  //const token=tokenizer.tokenize(string);
  return classifier.classify(string);
} 


module.exports={check};