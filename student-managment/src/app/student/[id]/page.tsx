"use client";

import { useRouter } from "next/navigation";

const Student = () => {
  const router = useRouter();
  const { id } = router.query || {}; // Check if router.query is defined before destructuring
  return (
    <div>
      <h2>Thông tin sinh viên</h2>
      <p>Sinh viên: {id}</p>
    </div>
  );
};
export default Student;
