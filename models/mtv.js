const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const motivational = new Schema({
    description: {
        type: String,
        required:true
    },
    no:{
      type:Number,
      required:true
    }

});

const Motivational = mongoose.model("motivational", motivational); // Changed to PascalCase



const data=[
  {
      "no": 1,
      "description": "Believe in yourself; you're unstoppable."
  },
  {
      "no": 2,
      "description": "Healing begins with courage and hope."
  },
  {
      "no": 3,
      "description": "Each new day brings strength and potential."
  },
  {
      "no": 4,
      "description": "You are stronger than you think."
  },
  {
      "no": 5,
      "description": "Never give up. Tomorrow holds possibilities."
  },
  {
      "no": 6,
      "description": "Peace begins with self-love and understanding."
  },
  {
      "no": 7,
      "description": "Recovery is a journey, not a race."
  },
  {
      "no": 8,
      "description": "You have the power to change your story."
  },
  {
      "no": 9,
      "description": "Small progress is still progress."
  },
  {
      "no": 10,
      "description": "You deserve happiness, love, and peace."
  },
  {
      "no": 11,
      "description": "Trust the process, healing will come."
  },
  {
      "no": 12,
      "description": "Every step forward is progress."
  },
  {
      "no": 13,
      "description": "Challenges help you become stronger."
  },
  {
      "no": 14,
      "description": "You have the strength to overcome anything."
  },
  {
      "no": 15,
      "description": "Even in darkness, there’s always light ahead."
  },
  {
      "no": 16,
      "description": "Self-care shines through Support's quiet moments."
  },
  {
      "no": 17,
      "description": "Embrace Hope, let Light guide you."
  },
  {
      "no": 18,
      "description": "Support grows in Light each day."
  },
  {
      "no": 19,
      "description": "Hope begins with Strength and patience."
  },
  {
      "no": 20,
      "description": "Discover Wellness through moments of Self-care."
  },
  {
      "no": 21,
      "description": "With Strength, Patience becomes your strength."
  },
  {
      "no": 22,
      "description": "Discover Mindfulness through moments of Courage."
  },
  {
      "no": 23,
      "description": "Light is key to Harmony within."
  },
  {
      "no": 24,
      "description": "Hope and Balance lead to healing."
  },
  {
      "no": 25,
      "description": "Believe fuels the path of Courage."
  },
  {
      "no": 26,
      "description": "Your Love lies in embracing Support."
  },
  {
      "no": 27,
      "description": "Balance begins with Hope and patience."
  },
  {
      "no": 28,
      "description": "With Healing, Courage becomes your strength."
  },
  {
      "no": 29,
      "description": "Your Trust lies in embracing Strength."
  },
  {
      "no": 30,
      "description": "Faith begins with Mindfulness and patience."
  },
  {
      "no": 31,
      "description": "Hope is key to Overcome within."
  },
  {
      "no": 32,
      "description": "Discover Love through moments of Believe."
  },
  {
      "no": 33,
      "description": "Trust is key to Support within."
  },
  {
      "no": 34,
      "description": "With Light, Trust becomes your strength."
  },
  {
      "no": 35,
      "description": "Faith shines through Wellness's quiet moments."
  },
  {
      "no": 36,
      "description": "Empower shines through Mindfulness's quiet moments."
  },
  {
      "no": 37,
      "description": "Mindfulness and Faith lead to healing."
  },
  {
      "no": 38,
      "description": "Discover Believe through moments of Hope."
  },
  {
      "no": 39,
      "description": "Patience begins with Balance and patience."
  },
  {
      "no": 40,
      "description": "Patience begins with Light and patience."
  },
  {
      "no": 41,
      "description": "Trust and Balance form healing's foundation."
  },
  {
      "no": 42,
      "description": "Inhale peace, exhale every struggle."
  },
  {
      "no": 43,
      "description": "Rise through struggle, shine in light."
  },
  {
      "no": 44,
      "description": "Grow through discomfort, discover your strength."
  },
  {
      "no": 45,
      "description": "Each moment shapes the path forward."
  },
  {
      "no": 46,
      "description": "Patience turns struggles into stepping stones."
  },
  {
      "no": 47,
      "description": "Strength blooms from understanding and action."
  },
  {
      "no": 48,
      "description": "Faith and courage build inner power."
  },
  {
      "no": 49,
      "description": "Healing starts with awareness and self-compassion."
  },
  {
      "no": 50,
      "description": "In darkness, your inner light shines brightest."
  },
  {
      "no": 51,
      "description": "Embrace fear; use it to rise higher."
  },
  {
      "no": 52,
      "description": "Self-love begins with self-compassion."
  },
  {
      "no": 53,
      "description": "Mindful moments create lasting inner peace."
  },
  {
      "no": 54,
      "description": "Courage to change leads to brighter days."
  },
  {
      "no": 55,
      "description": "Even small steps build a better tomorrow."
  },
  {
      "no": 56,
      "description": "Growth begins at the edge of fear."
  },
  {
      "no": 57,
      "description": "You hold the power to change."
  },
  {
      "no": 58,
      "description": "Through struggle, your strength shines."
  },
  {
      "no": 59,
      "description": "Live with intention, embrace every moment."
  },
  {
      "no": 60,
      "description": "Belief in yourself unlocks endless possibilities."
  },
  {
      "no": 61,
      "description": "You have the power to rewrite your story."
  },
  {
      "no": 62,
      "description": "Your journey matters more than the destination."
  },
  {
      "no": 63,
      "description": "Small moments of progress add up."
  },
  {
      "no": 64,
      "description": "You are resilient, you are enough."
  },
  {
      "no": 65,
      "description": "Every setback is a chance to learn."
  },
  {
      "no": 66,
      "description": "Believe in your healing process daily."
  },
  {
      "no": 67,
      "description": "Your inner peace is your strength."
  },
  {
      "no": 68,
      "description": "Focus on the present; it's your power."
  },
  {
      "no": 69,
      "description": "Healing begins the moment you decide."
  },
  {
      "no": 70,
      "description": "Hope is the key to progress."
  },
  {
      "no": 71,
      "description": "Peace is found within the journey."
  },
  {
      "no": 72,
      "description": "Your recovery story is still unfolding."
  },
  {
      "no": 73,
      "description": "Patience is an essential part of healing."
  },
  {
      "no": 74,
      "description": "Even small victories are worth celebrating."
  },
  {
      "no": 75,
      "description": "You are stronger than you think."
  },
  {
      "no": 76,
      "description": "Take one step at a time forward."
  },
  {
      "no": 77,
      "description": "Remember, healing is a continuous journey."
  },
  {
      "no": 78,
      "description": "Release what you cannot control."
  },
  {
      "no": 79,
      "description": "Trust yourself to rise above any challenge."
  },
  {
      "no": 80,
      "description": "Stay patient and trust your healing process."
  },
  {
      "no": 81,
      "description": "Every day offers a new opportunity to heal."
  },
  {
      "no": 82,
      "description": "Healing is never linear, but constant."
  },
  {
      "no": 83,
      "description": "Your story is unique; embrace it."
  },
  {
      "no": 84,
      "description": "Believe in the power of your dreams."
  },
  {
      "no": 85,
      "description": "Never underestimate the power of hope."
  },
  {
      "no": 86,
      "description": "Stand firm in your worth and truth."
  },
  {
      "no": 87,
      "description": "Strength grows when you least expect it."
  },
  {
      "no": 88,
      "description": "Find peace by letting go of fear."
  },
  {
      "no": 89,
      "description": "Embrace each moment; progress is a journey."
  },
  {
      "no": 90,
      "description": "You control the narrative of your life."
  },
  {
      "no": 91,
      "description": "Every experience teaches you something valuable."
  },
  {
      "no": 92,
      "description": "Shine brightly through all of life's challenges."
  },
  {
      "no": 93,
      "description": "Healing is not a destination; it's progress."
  },
  {
      "no": 94,
      "description": "Embrace your uniqueness, it is your power."
  },
  {
      "no": 95,
      "description": "Your best days are ahead of you."
  },
  {
      "no": 96,
      "description": "Trust in yourself; you've already overcome much."
  },
  {
      "no": 97,
      "description": "The journey is as important as the goal."
  },
  {
      "no": 98,
      "description": "Small changes lead to powerful transformations."
  },
  {
      "no": 99,
      "description": "Each step forward is a victory."
  },
  {
      "no": 100,
      "description": "You are worthy of peace, love, and healing."
  }
]

module.exports = {motivational:Motivational,data:data};
