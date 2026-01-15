
import { ExamData, Question } from './types';

export const EXAM_DATA: ExamData = {
  mcqs: [
    { id: 1, section: 1, type: 'MCQ', text: "Many young people want to ______ a contribution to their community.", options: ["do", "make", "give", "take"], correctAnswer: "make" },
    { id: 2, section: 1, type: 'MCQ', text: "The government ______ new policies to protect the environment last year.", options: ["has introduced", "introduces", "introduced", "was introducing"], correctAnswer: "introduced" },
    { id: 3, section: 1, type: 'MCQ', text: "If I ______ you, I would focus more on vocational training.", options: ["am", "was", "were", "had been"], correctAnswer: "were" },
    { id: 4, section: 1, type: 'MCQ', text: "Nam is very ______; he always finishes his homework on time.", options: ["reliable", "selfish", "lazy", "talkative"], correctAnswer: "reliable" },
    { id: 5, section: 1, type: 'MCQ', text: "We should avoid ______ plastic bags as much as possible.", options: ["use", "to use", "using", "used"], correctAnswer: "using" },
    { id: 6, section: 1, type: 'MCQ', text: "That is the woman ______ daughter won the first prize in the English contest.", options: ["who", "whom", "which", "whose"], correctAnswer: "whose" },
    { id: 7, section: 1, type: 'MCQ', text: "It is important to ______ digital skills in today's world.", options: ["master", "ignore", "delete", "lose"], correctAnswer: "master" },
    { id: 8, section: 1, type: 'MCQ', text: "I ______ my old teacher while I was walking in the park yesterday.", options: ["ran into", "looked for", "took after", "gave up"], correctAnswer: "ran into" },
    { id: 9, section: 1, type: 'MCQ', text: "The city is becoming ______ crowded than it was ten years ago.", options: ["more", "most", "as", "much"], correctAnswer: "more" },
    { id: 10, section: 1, type: 'MCQ', text: "You ______ park your car here; it's a 'No Parking' zone.", options: ["don't have to", "shouldn't", "mustn't", "needn't"], correctAnswer: "mustn't" },
    // Generated extra MCQs to reach 30
    { id: 11, section: 1, type: 'MCQ', text: "Global warming is caused by the increase of ______ gases in the atmosphere.", options: ["oxygen", "greenhouse", "nitrogen", "noble"], correctAnswer: "greenhouse" },
    { id: 12, section: 1, type: 'MCQ', text: "The ______ gap can cause conflicts between parents and children.", options: ["education", "generation", "income", "social"], correctAnswer: "generation" },
    { id: 13, section: 1, type: 'MCQ', text: "You should eat more vegetables to stay ______.", options: ["health", "healthy", "healthily", "healthiness"], correctAnswer: "healthy" },
    { id: 14, section: 1, type: 'MCQ', text: "ASEAN ______ for Association of Southeast Asian Nations.", options: ["stands", "makes", "takes", "goes"], correctAnswer: "stands" },
    { id: 15, section: 1, type: 'MCQ', text: "Cyberbullying is one of the most serious ______ issues today.", options: ["society", "sociable", "social", "socialize"], correctAnswer: "social" },
    { id: 16, section: 1, type: 'MCQ', text: "If the temperature ______, the polar ice caps will melt.", options: ["rises", "raised", "rise", "was rising"], correctAnswer: "rises" },
    { id: 17, section: 1, type: 'MCQ', text: "The ______ between the two generations is becoming wider.", options: ["bridge", "distance", "path", "gap"], correctAnswer: "gap" },
    { id: 18, section: 1, type: 'MCQ', text: "Regular exercise is ______ for both physical and mental health.", options: ["harmful", "useless", "beneficial", "negative"], correctAnswer: "beneficial" },
    { id: 19, section: 1, type: 'MCQ', text: "Viet Nam joined ASEAN ______ 1995.", options: ["on", "in", "at", "since"], correctAnswer: "in" },
    { id: 20, section: 1, type: 'MCQ', text: "Many species are ______ danger of extinction.", options: ["on", "at", "in", "for"], correctAnswer: "in" },
    { id: 21, section: 1, type: 'MCQ', text: "Children should ______ their elders' advice.", options: ["listen to", "hear to", "obey to", "comply to"], correctAnswer: "listen to" },
    { id: 22, section: 1, type: 'MCQ', text: "Sustainable ______ is essential for the future of our planet.", options: ["developing", "development", "developed", "developer"], correctAnswer: "development" },
    { id: 23, section: 1, type: 'MCQ', text: "We ______ to the mountains for our holiday last summer.", options: ["went", "go", "have gone", "were going"], correctAnswer: "went" },
    { id: 24, section: 1, type: 'MCQ', text: "The internet has ______ the way people learn and work.", options: ["revolutionized", "fixed", "remained", "destroyed"], correctAnswer: "revolutionized" },
    { id: 25, section: 1, type: 'MCQ', text: "Smoking is ______ to your health.", options: ["good", "beneficial", "detrimental", "safe"], correctAnswer: "detrimental" },
    { id: 26, section: 1, type: 'MCQ', text: "The ______ of living in big cities is quite high.", options: ["cost", "price", "fee", "fare"], correctAnswer: "cost" },
    { id: 27, section: 1, type: 'MCQ', text: "She ______ English for ten years now.", options: ["studies", "is studying", "has studied", "studied"], correctAnswer: "has studied" },
    { id: 28, section: 1, type: 'MCQ', text: "People who live in ______ areas often lack clean water.", options: ["urban", "rural", "modern", "rich"], correctAnswer: "rural" },
    { id: 29, section: 1, type: 'MCQ', text: "You ______ use your phone during the exam.", options: ["must", "can", "mustn't", "might"], correctAnswer: "mustn't" },
    { id: 30, section: 1, type: 'MCQ', text: "Education plays a ______ role in poverty reduction.", options: ["minor", "crucial", "small", "weak"], correctAnswer: "crucial" },
  ],
  gapFills: [
    { id: 31, section: 2, type: 'GAP_FILL', text: "We should turn _______ the lights before leaving the room to save energy.", correctAnswer: "off" },
    { id: 32, section: 2, type: 'GAP_FILL', text: "My parents don't _______ eye to eye with me on my career choice.", correctAnswer: "see" },
    { id: 33, section: 2, type: 'GAP_FILL', text: "Social media can help people stay _______ touch with each other.", correctAnswer: "in" },
    { id: 34, section: 2, type: 'GAP_FILL', text: "The ASEAN ________ was founded in 1967 in Bangkok.", correctAnswer: "Declaration" },
    { id: 35, section: 2, type: 'GAP_FILL', text: "Fossil fuels are a non-_______ source of energy.", correctAnswer: "renewable" },
    { id: 36, section: 2, type: 'GAP_FILL', text: "Many students suffer _______ stress before important exams.", correctAnswer: "from" },
    { id: 37, section: 2, type: 'GAP_FILL', text: "Life _______ in many countries has increased thanks to medical progress.", correctAnswer: "expectancy" },
    { id: 38, section: 2, type: 'GAP_FILL', text: "Are you interested _______ joining our volunteer club?", correctAnswer: "in" },
    { id: 39, section: 2, type: 'GAP_FILL', text: "You should _______ up a hobby to reduce pressure after school.", correctAnswer: "take" },
    { id: 40, section: 2, type: 'GAP_FILL', text: "He has been working for this company _______ five years.", correctAnswer: "for" },
    { id: 41, section: 2, type: 'GAP_FILL', text: "Don't put _______ until tomorrow what you can do today.", correctAnswer: "off" },
    { id: 42, section: 2, type: 'GAP_FILL', text: "A balanced diet is key _______ maintaining good health.", correctAnswer: "to" },
    { id: 43, section: 2, type: 'GAP_FILL', text: "I'm looking forward _______ seeing you soon.", correctAnswer: "to" },
    { id: 44, section: 2, type: 'GAP_FILL', text: "The ______ of global warming is a major concern for scientists.", correctAnswer: "issue" },
    { id: 45, section: 2, type: 'GAP_FILL', text: "She succeeded _______ passing the driving test.", correctAnswer: "in" },
    { id: 46, section: 2, type: 'GAP_FILL', text: "We must protect the environment _______ future generations.", correctAnswer: "for" },
    { id: 47, section: 2, type: 'GAP_FILL', text: "The local council decided to _______ down the old building.", correctAnswer: "knock" },
    { id: 48, section: 2, type: 'GAP_FILL', text: "You shouldn't rely _______ others to do your homework.", correctAnswer: "on" },
    { id: 49, section: 2, type: 'GAP_FILL', text: "My sister is very good _______ playing the piano.", correctAnswer: "at" },
    { id: 50, section: 2, type: 'GAP_FILL', text: "I was late _______ school because of the heavy traffic.", correctAnswer: "for" },
  ],
  wordForms: [
    { id: 51, section: 3, type: 'WORD_FORM', text: "We need to find a _______ solution to the plastic waste problem.", clue: "SUSTAIN", correctAnswer: "sustainable" },
    { id: 52, section: 3, type: 'WORD_FORM', text: "The _______ of the new library will benefit all students.", clue: "CONSTRUCT", correctAnswer: "construction" },
    { id: 53, section: 3, type: 'WORD_FORM', text: "Technology has _______ changed the way we communicate.", clue: "DRAMATIC", correctAnswer: "dramatically" },
    { id: 54, section: 3, type: 'WORD_FORM', text: "Living in a city can be very _______ due to noise and traffic.", clue: "STRESS", correctAnswer: "stressful" },
    { id: 55, section: 3, type: 'WORD_FORM', text: "My parents are always _______ of my decisions.", clue: "SUPPORT", correctAnswer: "supportive" },
    { id: 56, section: 3, type: 'WORD_FORM', text: "The ______ of natural resources is a global challenge.", clue: "DEPLETE", correctAnswer: "depletion" },
    { id: 57, section: 3, type: 'WORD_FORM', text: "Many people find it difficult to maintain a _______ lifestyle.", clue: "HEALTH", correctAnswer: "healthy" },
    { id: 58, section: 3, type: 'WORD_FORM', text: "She is a very _______ student who always gets high marks.", clue: "INTELLIGENCE", correctAnswer: "intelligent" },
    { id: 59, section: 3, type: 'WORD_FORM', text: "We should increase our _______ of renewable energy.", clue: "CONSUME", correctAnswer: "consumption" },
    { id: 60, section: 3, type: 'WORD_FORM', text: "The ______ between the two countries has improved.", clue: "RELATION", correctAnswer: "relationship" },
    { id: 61, section: 3, type: 'WORD_FORM', text: "I was ______ surprised by the news.", clue: "PLEASANT", correctAnswer: "pleasantly" },
    { id: 62, section: 3, type: 'WORD_FORM', text: "Air ______ is a major problem in many industrial cities.", clue: "POLLUTE", correctAnswer: "pollution" },
    { id: 63, section: 3, type: 'WORD_FORM', text: "He gave a very clear _______ of how the machine works.", clue: "EXPLAIN", correctAnswer: "explanation" },
    { id: 64, section: 3, type: 'WORD_FORM', text: "Regular physical _______ can help reduce stress.", clue: "ACTIVE", correctAnswer: "activity" },
    { id: 65, section: 3, type: 'WORD_FORM', text: "The ______ of the internet has changed our lives.", clue: "INVENT", correctAnswer: "invention" },
  ],
  conversations: [
    {
      id: 66,
      sentences: [
        { label: "A", text: "That sounds like a great idea! I’ll join you." },
        { label: "B", text: "Hi Nam, what are you doing this weekend?" },
        { label: "C", text: "I'm going to participate in a green campaign to clean up the local beach." },
        { label: "D", text: "Great! We’ll meet at the school gate at 7 AM on Sunday." },
        { label: "E", text: "Not much. Why do you ask?" },
      ],
      correctOrder: "BECAD"
    },
    {
      id: 67,
      sentences: [
        { label: "A", text: "I understand, but I feel like I need more freedom." },
        { label: "B", text: "Mom, why do you always check my phone?" },
        { label: "C", text: "Well, we can try to talk more often so you don't feel like I'm spying." },
        { label: "D", text: "That would be better for both of us." },
        { label: "E", text: "Because I'm worried about the people you talk to online." },
      ],
      correctOrder: "BEACD"
    },
    {
      id: 68,
      sentences: [
        { label: "A", text: "Yes, I think I'll sign up for that too." },
        { label: "B", text: "Have you decided which club to join this year?" },
        { label: "C", text: "I'm thinking about the English Speaking Club." },
        { label: "D", text: "Awesome! We can practice together." },
        { label: "E", text: "It's a good way to improve our communication skills." },
      ],
      correctOrder: "BCEAD"
    }
  ],
  textInsertions: [
    {
      id: 81,
      title: "The Generation Gap",
      paragraphTemplate: "The generation gap is a common issue in many families. (81) ______. One of the main reasons is the rapid development of technology. (82) ______. While teenagers use smartphones for everything, (83) ______. This gap can cause misunderstandings and arguments. (84) ______. Communication is the key to closing this gap. By understanding each other, families can live more harmoniously. (85) ______.",
      options: [
        { label: "A", text: "This leads to a healthier lifestyle and longer life expectancy." },
        { label: "B", text: "However, many elderly people find it hard to adapt to new technology." },
        { label: "C", text: "It is the differences in beliefs and behaviors between younger and older generations." },
        { label: "D", text: "Therefore, parents should listen more to their children's opinions." },
        { label: "E", text: "For example, young people today are more tech-savvy than their grandparents." }
      ],
      answers: { 81: "C", 82: "E", 83: "B", 84: "D", 85: "A" }
    },
    {
        id: 86,
        title: "Global Warming and Its Effects",
        paragraphTemplate: "Global warming is the long-term heating of Earth's climate system. (86) ______. The primary cause is the human-induced greenhouse effect. (87) ______. This results in melting polar ice caps and rising sea levels. (88) ______. If this trend continues, many coastal cities will be flooded. (89) ______. Therefore, we must take immediate action to reduce carbon emissions. (90) ______.",
        options: [
          { label: "A", text: "Switching to renewable energy is one of the most effective solutions." },
          { label: "B", text: "This is primarily due to the burning of fossil fuels like coal and oil." },
          { label: "C", text: "It has been observed since the pre-industrial period." },
          { label: "D", text: "Furthermore, it threatens biodiversity and animal habitats." },
          { label: "E", text: "The Earth's average temperature has risen by about 1 degree Celsius." }
        ],
        answers: { 86: "C", 87: "B", 88: "E", 89: "D", 90: "A" }
      },
      {
        id: 91,
        title: "ASEAN's Role in Regional Stability",
        paragraphTemplate: "ASEAN was founded with the aim of promoting economic growth and peace. (91) ______. Since its establishment, it has grown from five to ten member countries. (92) ______. Member states follow the principle of non-interference. (93) ______. This approach helps maintain stability despite political differences. (94) ______. In recent years, ASEAN has also focused on digital transformation. (95) ______.",
        options: [
          { label: "A", text: "This ensures that all countries can cooperate while respecting sovereignty." },
          { label: "B", text: "This is known as the 'ASEAN Way'." },
          { label: "C", text: "The organization has played a crucial role in Southeast Asian diplomacy." },
          { label: "D", text: "The goal is to create a more competitive and integrated regional economy." },
          { label: "E", text: "Viet Nam's entry in 1995 was a significant milestone for the group." }
        ],
        answers: { 91: "C", 92: "E", 93: "B", 94: "A", 95: "D" }
      },
      {
        id: 96,
        title: "Living a Healthy Lifestyle",
        paragraphTemplate: "Maintaining a healthy lifestyle is essential for well-being. (96) ______. First, a balanced diet provides the necessary nutrients. (97) ______. Second, regular physical activity keeps your heart strong. (98) ______. Third, getting enough sleep is vital for mental clarity. (99) ______. Finally, avoiding bad habits like smoking is crucial. (100) ______.",
        options: [
          { label: "A", text: "It helps prevent chronic diseases and extends life." },
          { label: "B", text: "Lack of rest can lead to increased stress and irritability." },
          { label: "C", text: "Eating plenty of fruits and vegetables is highly recommended." },
          { label: "D", text: "It is never too late to start making positive changes." },
          { label: "E", text: "Just thirty minutes of walking every day can make a difference." }
        ],
        answers: { 96: "A", 97: "C", 98: "E", 99: "B", 100: "D" }
      }
  ]
};
