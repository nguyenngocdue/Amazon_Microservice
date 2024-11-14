"use client";

import { useEffect, useState } from "react";
import config from "../config"

export default function Home() {
  const [users, setUsers] = useState([]); // State để lưu danh sách người dùng
  const [loading, setLoading] = useState(true); // State để hiển thị trạng thái loading
  const [error, setError] = useState(null); // State để lưu lỗi nếu có

  useEffect(() => {
    // Gọi API để lấy danh sách người dùng
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${config.endpoints.users.v1}`);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json(); // Chuyển đổi response thành JSON
        setUsers(data); // Lưu danh sách người dùng vào state
      } catch (err) {
        setError(err.message); // Lưu lỗi nếu có
      } finally {
        setLoading(false); // Tắt trạng thái loading sau khi hoàn thành
      }
    };

    fetchUsers(); // Gọi hàm fetchUsers
  }, []); // Chỉ chạy một lần khi component được mount

  // Hiển thị loading hoặc lỗi nếu có
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Render danh sách người dùng
  return (
    <>
      <h1>HELLO</h1>
      <h2>User List:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}
