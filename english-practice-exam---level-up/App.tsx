
import React, { useState, useMemo } from 'react';
import { EXAM_DATA } from './data';
import { Question, QuestionType } from './types';

// Types for user progress
type AnswerMap = Record<number, string>;
type FeedbackMap = Record<number, 'correct' | 'incorrect' | null>;

const App: React.FC = () => {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [feedback, setFeedback] = useState<FeedbackMap>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(1);

  const totalQuestions = 100;

  const handleAnswerChange = (id: number, value: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const checkAnswer = (id: number, type: QuestionType, correct: string) => {
    const userVal = (answers[id] || '').trim().toLowerCase();
    const correctVal = correct.trim().toLowerCase();
    
    if (type === 'CONVERSATION') {
      // Sequence check
      return userVal.replace(/[^a-z]/gi, '') === correctVal.replace(/[^a-z]/gi, '');
    }
    
    return userVal === correctVal;
  };

  const handleSubmit = () => {
    const newFeedback: FeedbackMap = {};
    
    // Check MCQs
    EXAM_DATA.mcqs.forEach(q => {
      newFeedback[q.id] = checkAnswer(q.id, q.type, q.correctAnswer) ? 'correct' : 'incorrect';
    });
    
    // Check Gap Fills
    EXAM_DATA.gapFills.forEach(q => {
      newFeedback[q.id] = checkAnswer(q.id, q.type, q.correctAnswer) ? 'correct' : 'incorrect';
    });
    
    // Check Word Forms
    EXAM_DATA.wordForms.forEach(q => {
      newFeedback[q.id] = checkAnswer(q.id, q.type, q.correctAnswer) ? 'correct' : 'incorrect';
    });

    // Check Conversations (each sequence counts as 1 correct/incorrect for the set, 
    // but the prompt says 15 questions, 3 sets of 5. Let's count each segment's answer.)
    EXAM_DATA.conversations.forEach(set => {
       // We'll treat the whole sequence as 5 individual question units for scoring 
       // or just 5 units total? The prompt says "15 câu".
       // Let's assume each set of 5 counts as 5 individual points. 
       // If order is BECAD, and they got BECAD, it's 5 points.
       const isCorrect = checkAnswer(set.id, 'CONVERSATION', set.correctOrder);
       // Distribute feedback to 5 virtual IDs to reach 100 total
       for (let i = 0; i < 5; i++) {
         newFeedback[set.id * 100 + i] = isCorrect ? 'correct' : 'incorrect';
       }
    });

    // Check Text Insertions
    EXAM_DATA.textInsertions.forEach(set => {
      Object.entries(set.answers).forEach(([qId, correct]) => {
        const id = parseInt(qId);
        newFeedback[id] = checkAnswer(id, 'TEXT_INSERTION', correct) ? 'correct' : 'incorrect';
      });
    });

    setFeedback(newFeedback);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const score = useMemo(() => {
    const correctCount = Object.values(feedback).filter(f => f === 'correct').length;
    // Normalize to 100 total
    return ((10 * correctCount) / totalQuestions).toFixed(2);
  }, [feedback]);

  const resetExam = () => {
    setAnswers({});
    setFeedback({});
    setSubmitted(false);
    setActiveTab(1);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <i className="fas fa-graduation-cap"></i>
            English Final Exam
          </h1>
          {submitted && (
            <div className="bg-white text-indigo-700 px-4 py-1 rounded-full font-bold shadow-inner">
              Score: {score} / 10
            </div>
          )}
        </div>
        {/* Navigation Tabs */}
        <div className="max-w-5xl mx-auto px-4 flex overflow-x-auto no-scrollbar border-t border-indigo-500/30">
          {[1, 2, 3, 4, 5].map(num => (
            <button
              key={num}
              onClick={() => setActiveTab(num)}
              className={`px-4 py-3 whitespace-nowrap font-medium transition-colors ${
                activeTab === num ? 'border-b-4 border-white' : 'text-indigo-100 hover:bg-indigo-700'
              }`}
            >
              Phần {num}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-8">
        {/* Section 1: MCQ */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6">Phần 1: Multiple Choice (30 Câu)</h2>
            {EXAM_DATA.mcqs.map((q, idx) => (
              <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-2 py-1 rounded">Câu {idx + 1}</span>
                  {submitted && (
                    <span className={`text-sm font-bold ${feedback[q.id] === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                      {feedback[q.id] === 'correct' ? <><i className="fas fa-check-circle"></i> Đúng</> : <><i className="fas fa-times-circle"></i> Sai</>}
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-800 mb-4">{q.text}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options?.map((opt, i) => {
                    const label = ['A', 'B', 'C', 'D'][i];
                    return (
                      <button
                        key={opt}
                        disabled={submitted}
                        onClick={() => handleAnswerChange(q.id, opt)}
                        className={`text-left px-4 py-3 rounded-lg border-2 transition-all ${
                          answers[q.id] === opt 
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="font-bold mr-2">{label}.</span> {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section 2: Gap Fill */}
        {activeTab === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6">Phần 2: Gap Filling (20 Câu)</h2>
            <p className="text-gray-600 mb-4 italic">Điền một từ thích hợp vào mỗi chỗ trống.</p>
            {EXAM_DATA.gapFills.map((q, idx) => (
              <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                   <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-2 py-1 rounded">Câu {30 + idx + 1}</span>
                </div>
                <div className="flex-grow">
                   <p className="text-lg text-gray-800">{q.text}</p>
                   <div className="mt-3 flex items-center gap-3">
                     <input
                       type="text"
                       disabled={submitted}
                       value={answers[q.id] || ''}
                       onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                       placeholder="Nhập từ..."
                       className="flex-grow max-w-xs border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none transition-colors"
                     />
                     {submitted && (
                        <span className={`text-sm font-bold ${feedback[q.id] === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                          {feedback[q.id] === 'correct' ? <><i className="fas fa-check"></i> Đúng</> : <><i className="fas fa-times"></i> Sai</>}
                        </span>
                     )}
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section 3: Word Forms */}
        {activeTab === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6">Phần 3: Word Forms (15 Câu)</h2>
            {EXAM_DATA.wordForms.map((q, idx) => (
              <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4">
                 <div className="flex-shrink-0">
                   <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-2 py-1 rounded">Câu {50 + idx + 1}</span>
                </div>
                <div className="flex-grow">
                   <p className="text-lg text-gray-800">{q.text} <span className="text-indigo-600 font-bold">({q.clue})</span></p>
                   <div className="mt-3 flex items-center gap-3">
                     <input
                       type="text"
                       disabled={submitted}
                       value={answers[q.id] || ''}
                       onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                       placeholder="Dạng từ..."
                       className="flex-grow max-w-xs border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none transition-colors"
                     />
                     {submitted && (
                        <span className={`text-sm font-bold ${feedback[q.id] === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                          {feedback[q.id] === 'correct' ? <><i className="fas fa-check"></i> Đúng</> : <><i className="fas fa-times"></i> Sai</>}
                        </span>
                     )}
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section 4: Conversations */}
        {activeTab === 4 && (
          <div className="space-y-12">
            <h2 className="text-2xl font-bold text-indigo-900">Phần 4: Conversation Arrangement (15 Câu)</h2>
            <p className="text-gray-600 italic">Sắp xếp các câu (A, B, C, D, E) thành thứ tự hợp lý bằng cách nhập chuỗi (ví dụ: BEACD).</p>
            {EXAM_DATA.conversations.map((set, setIdx) => (
              <div key={set.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Đoạn hội thoại {setIdx + 1}</h3>
                <div className="space-y-2 mb-6">
                  {set.sentences.map(s => (
                    <div key={s.label} className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex gap-4">
                      <span className="font-bold text-indigo-600">{s.label}.</span>
                      <p className="text-gray-700">{s.text}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <span className="font-bold text-gray-700">Thứ tự đúng:</span>
                  <input
                    type="text"
                    disabled={submitted}
                    value={answers[set.id] || ''}
                    onChange={(e) => handleAnswerChange(set.id, e.target.value.toUpperCase())}
                    placeholder="VD: BECAD"
                    className="w-full sm:w-40 border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none font-mono tracking-widest text-center"
                    maxLength={5}
                  />
                  {submitted && (
                    <span className={`font-bold ${feedback[set.id * 100] === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                       {feedback[set.id * 100] === 'correct' ? '✅ Chính xác' : '❌ Chưa đúng'}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section 5: Text Insertion */}
        {activeTab === 5 && (
          <div className="space-y-12 pb-10">
            <h2 className="text-2xl font-bold text-indigo-900">Phần 5: Text Insertion (20 Câu)</h2>
            {EXAM_DATA.textInsertions.map((set, setIdx) => (
              <div key={set.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-indigo-700 mb-6 underline decoration-indigo-200 underline-offset-8">
                  {set.title}
                </h3>
                
                <div className="mb-8 p-6 bg-indigo-50/50 rounded-xl leading-relaxed text-lg text-gray-800">
                   {set.paragraphTemplate.split(/(\(\d+\) ____)/g).map((part, i) => {
                     const match = part.match(/\((\d+)\) ____/);
                     if (match) {
                       const qId = parseInt(match[1]);
                       return (
                         <span key={i} className="inline-flex flex-col items-center mx-1">
                           <select
                             disabled={submitted}
                             value={answers[qId] || ''}
                             onChange={(e) => handleAnswerChange(qId, e.target.value)}
                             className={`border-b-2 bg-transparent font-bold text-indigo-600 focus:outline-none transition-colors ${
                               submitted 
                                 ? feedback[qId] === 'correct' ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600'
                                 : 'border-indigo-400 hover:border-indigo-600'
                             }`}
                           >
                             <option value="">({qId})</option>
                             {['A', 'B', 'C', 'D', 'E'].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                           </select>
                           {submitted && (
                             <span className="text-[10px] uppercase font-black">
                               {feedback[qId] === 'correct' ? 'OK' : 'ERR'}
                             </span>
                           )}
                         </span>
                       );
                     }
                     return part;
                   })}
                </div>

                <div className="grid grid-cols-1 gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <p className="font-bold text-gray-600 text-sm uppercase mb-2">Lựa chọn:</p>
                  {set.options.map(opt => (
                    <div key={opt.label} className="flex gap-4">
                      <span className="font-bold text-indigo-600">{opt.label}.</span>
                      <p className="text-gray-700 text-sm italic">{opt.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 shadow-lg transition-transform active:scale-95"
            >
              Nộp Bài & Chấm Điểm
            </button>
          ) : (
            <button
              onClick={resetExam}
              className="bg-gray-800 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-900 shadow-lg transition-transform active:scale-95"
            >
              Làm Lại Từ Đầu
            </button>
          )}
        </div>
      </main>

      {/* Floating Score Tracker */}
      {submitted && (
        <div className="fixed bottom-6 right-6 bg-white p-6 rounded-2xl shadow-2xl border-2 border-indigo-600 animate-bounce">
          <div className="text-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Điểm của bạn</p>
            <h4 className="text-4xl font-black text-indigo-600">{score}</h4>
            <p className="text-xs text-gray-400 mt-1">trên thang điểm 10</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
