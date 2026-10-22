/* ใส่ Web app URL ของ Apps Script (ลงท้ายด้วย /exec) ระหว่างเครื่องหมายคำพูด แล้วกด Commit
   ถ้าเว้นว่าง เว็บจะทำงานแบบเก็บงานในเครื่องผู้ใช้เท่านั้น */
window.MSH_API_URL = '';

/* ผลประเมินจริงสำหรับหน้า "รายงานผล" (โหมด Verified Real)
   เว้นเป็น null ไว้ = ส่วนนั้นแสดง "รอผลประเมิน"
   เมื่อได้ผลจริง ให้ใส่ข้อมูลรูปแบบเดียวกับชุดข้อมูลตัวอย่าง โดยต้องมี status: 'verified' และ source เช่น
   window.MSH_VERIFIED_RESULTS = {
     status: 'verified',
     source: 'แบบวัดความคิดสร้างสรรค์ ฉบับครู ประเมินวันที่ ...',
     creativity: { n: 74, maxScore: 20, mean: ..., sd: ..., criterion: ..., passed: ...,
       rooms: { 'ม.2/2': { n: 37, mean: ..., passed: ... }, 'ม.2/3': { n: 37, mean: ..., passed: ... } } },
     productRubric: { maxScore: 30, groupScores: [ ... 8 ค่า กลุ่ม 1–4 = ม.2/2, 5–8 = ม.2/3 ... ] },
     sparkRubric: { maxScore: 4, problemUnderstanding: ..., ideaAndAILiteracy: ..., prototypeIteration: ..., impactEvidence: ... },
     sparkEvidence: { total: 74, S: ..., P: ..., A: ..., R: ..., K: ..., completeAll: ... },
     aiLiteracy: { logCount: ..., studentsWithLog: ..., rubricMean: ..., rubricMax: 4 },
     qualityGatekeeper: { approved: ..., revise: ..., pending: ... }
   };
   ใส่เฉพาะส่วนที่มีผลจริง ส่วนที่ไม่ใส่จะแสดง "รอผลประเมิน"
   ระบบคำนวณค่าเฉลี่ย ร้อยละ และระดับเอง และไม่รับชุดตัวเลขที่ตรงกับชุดข้อมูลตัวอย่าง */
window.MSH_VERIFIED_RESULTS = null;

/* ลิงก์หลักฐานเพิ่มเติมที่ครูอนุญาตให้เผยแพร่ (เว้นว่างไว้ = ไม่แสดงการ์ด)
   ห้ามใส่ลิงก์ที่มีชื่อ เลขที่ หรือข้อมูลส่วนบุคคลของนักเรียน */
window.MSH_EVIDENCE = { prototype: '', aiLog: '' };
