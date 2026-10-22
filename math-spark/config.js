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
window.MSH_VERIFIED_RESULTS = {
  "status": "verified",
  "source": "ครูผู้สอนประเมินชิ้นงานตาม Rubric 30 คะแนน และ Rubric กระบวนการ SPARK 4 ด้าน (23 ต.ค. 2569)",
  "productRubric": {
    "maxScore": 30,
    "groups": [
      {
        "room": "ม.2/2",
        "group": "กลุ่ม 1 · BINGO เอกนาม–พหุนาม",
        "crit": {
          "acc": 7,
          "cre": 4,
          "des": 5,
          "rul": 3,
          "pre": 5
        }
      },
      {
        "room": "ม.2/2",
        "group": "กลุ่ม 2 · เศรษฐีคณิตศาสตร์",
        "crit": {
          "acc": 8,
          "cre": 4,
          "des": 4,
          "rul": 4,
          "pre": 4
        }
      },
      {
        "room": "ม.2/2",
        "group": "กลุ่ม 3 · Speed Treasures",
        "crit": {
          "acc": 8,
          "cre": 5,
          "des": 3,
          "rul": 4,
          "pre": 4
        }
      },
      {
        "room": "ม.2/2",
        "group": "กลุ่ม 4 · Polynomial Domino",
        "crit": {
          "acc": 9,
          "cre": 4,
          "des": 5,
          "rul": 5,
          "pre": 5
        }
      },
      {
        "room": "ม.2/3",
        "group": "กลุ่ม 1 · Math Mission",
        "crit": {
          "acc": 8,
          "cre": 5,
          "des": 5,
          "rul": 4,
          "pre": 4
        }
      },
      {
        "room": "ม.2/3",
        "group": "กลุ่ม 2 · รถไฟพหุนาม",
        "crit": {
          "acc": 6,
          "cre": 3,
          "des": 5,
          "rul": 3,
          "pre": 3
        }
      },
      {
        "room": "ม.2/3",
        "group": "กลุ่ม 3 · MATH UNO",
        "crit": {
          "acc": 7,
          "cre": 4,
          "des": 4,
          "rul": 4,
          "pre": 4
        }
      },
      {
        "room": "ม.2/3",
        "group": "กลุ่ม 4 · ภารกิจพิชิต 50 ช่อง",
        "crit": {
          "acc": 9,
          "cre": 5,
          "des": 5,
          "rul": 4,
          "pre": 5
        }
      }
    ]
  },
  "sparkRubric": {
    "maxScore": 4,
    "groups": [
      {
        "room": "ม.2/2",
        "group": "กลุ่ม 1 · BINGO เอกนาม–พหุนาม",
        "proc": {
          "pu": 4,
          "ai": 3,
          "pi": 3,
          "ie": 3
        }
      },
      {
        "room": "ม.2/2",
        "group": "กลุ่ม 2 · เศรษฐีคณิตศาสตร์",
        "proc": {
          "pu": 3,
          "ai": 4,
          "pi": 3,
          "ie": 3
        }
      },
      {
        "room": "ม.2/2",
        "group": "กลุ่ม 3 · Speed Treasures",
        "proc": {
          "pu": 3,
          "ai": 2,
          "pi": 2,
          "ie": 3
        }
      },
      {
        "room": "ม.2/2",
        "group": "กลุ่ม 4 · Polynomial Domino",
        "proc": {
          "pu": 3,
          "ai": 4,
          "pi": 4,
          "ie": 3
        }
      },
      {
        "room": "ม.2/3",
        "group": "กลุ่ม 1 · Math Mission",
        "proc": {
          "pu": 3,
          "ai": 4,
          "pi": 3,
          "ie": 3
        }
      },
      {
        "room": "ม.2/3",
        "group": "กลุ่ม 2 · รถไฟพหุนาม",
        "proc": {
          "pu": 3,
          "ai": 3,
          "pi": 2,
          "ie": 3
        }
      },
      {
        "room": "ม.2/3",
        "group": "กลุ่ม 3 · MATH UNO",
        "proc": {
          "pu": 2,
          "ai": 2,
          "pi": 3,
          "ie": 3
        }
      },
      {
        "room": "ม.2/3",
        "group": "กลุ่ม 4 · ภารกิจพิชิต 50 ช่อง",
        "proc": {
          "pu": 3,
          "ai": 3,
          "pi": 2,
          "ie": 2
        }
      }
    ]
  }
};

/* ลิงก์หลักฐานเพิ่มเติมที่ครูอนุญาตให้เผยแพร่ (เว้นว่างไว้ = ไม่แสดงการ์ด)
   ห้ามใส่ลิงก์ที่มีชื่อ เลขที่ หรือข้อมูลส่วนบุคคลของนักเรียน */
window.MSH_EVIDENCE = { prototype: '', aiLog: '' };
