export function merge(v1: number[], v2: number[], v3: number[]): number[] {
  const result: number[] = [];

  let it1 = 0; //ชี้ตัวแรก v1
  let it2 = 0; //ชี้ตัวแรก v2
  let it3 = v3.length; //ชี้ตัวท้าย v3

  //loop จนกว่า ข้อมูลจะหมด
  while (it1 !== v1.length || it2 !== v2.length || it3 !== 0) { 
    let m = 0; //รอเก็บตัวน้อยสุด
    let from = 0; // มาจาก array ไหน

    // v1 มีค่าไหม ถ้ามีเก็บค่าใน m เลย
    if (it1 !== v1.length) {
      m = v1[it1];
      from = 1;
    }

    // v2 มีค่าไหม ถ้ามีเทียบกับตัวแรก ถ้าน้อยกว่า เก็บค่า v2[it2] ใน m แทน
    if (it2 !== v2.length) {
      if (from === 0 || v2[it2] < m) {
        m = v2[it2];
        from = 2;
      }
    }

    // v3 มีค่าไหม ถ้ามีเทียบกับ m ถ้าน้อยกว่า เก็บค่า v3[it3] ใน m แทน
    if (it3 !== 0) {
      if (from === 0 || v3[it3 - 1] < m) {
        m = v3[it3 - 1];
        from = 3;
      }
    }

    // push ตัวน้อยที่สุดเข้า array 
    result.push(m);
    // เช็คว่าดึงจากใครมา และ ขยับ it ตัวนั้น
    if (from === 1) {
      it1++;
    } else if (from === 2) {
      it2++;
    } else {
      it3--;
    }
  }

  return result;
}
