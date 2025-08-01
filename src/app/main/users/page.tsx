'use client'
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/users');
      if (!res.ok) throw new Error('خطا در دریافت کاربران');
      const data = await res.json();
      setUsers(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const HandleDelete = async (id: any) => {

    try {
      const res = await fetch(`/api/users?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`خطا: ${errorData.message}`);
        return;
      }

      const result = await res.json();
      alert(result.message);


      fetchUsers();
    } catch (err: any) { }
  }
  const HandleAddUser = () => {
    setIsShowModal(true)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = async () => {
    if (!newUser.name || !newUser.email) {
      alert('هم نام و هم ایمیل الزامی است.');
      return;
    }

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(`خطا: ${err.message}`);
        return;
      }

      setIsShowModal(false);
      setNewUser({ name: '', email: '' });
      fetchUsers();
    } catch (error) {
      alert('خطا در افزودن کاربر');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 4, margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 5 ,  }} className='text-blue-500 '>لیست کاربران</h1>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {loading ? (
        <p style={{ textAlign: 'center' }}>در حال بارگذاری...</p>
      ) : (
        <>
          <button className='bg-blue-500 mb-10 p-4 rounded text-white cursor-pointer' onClick={HandleAddUser}>ایجاد کاربر</button>
          <table
            style={{
           
              borderCollapse: 'collapse',
              // boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#f0f2f5' }}>
                <th style={thStyle}>شناسه</th>
                <th style={thStyle}>نام</th>
                <th style={thStyle}>ایمیل</th>
                <th style={thStyle}>حذف</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr
                  key={user.id}
                  style={{
                    borderBottom: '1px solid #ddd',
                    textAlign: 'center',
                    cursor: 'default',
                  }}
                >
                  <td style={tdStyle}>{user.id}</td>
                  <td style={tdStyle}>{user.name}</td>
                  <td style={tdStyle}>{user.email}</td>
                  <td className='text-red-500 cursor-pointer' style={tdStyle}><button className='text-red-500 cursor-pointer' onClick={() => HandleDelete(user.id)}>حذف</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {isShowModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: 24,
            borderRadius: 8,
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
            <h3 style={{ textAlign: 'center' }}>افزودن کاربر جدید</h3>
            <input
              type="text"
              name="name"
              placeholder="نام"
              value={newUser.name}
              onChange={handleInputChange}
              style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
            />
            <input
              type="email"
              name="email"
              placeholder="ایمیل"
              value={newUser.email}
              onChange={handleInputChange}
              style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => setIsShowModal(false)} style={{ padding: '6px 12px' }}>انصراف</button>
              <button onClick={handleAddUser} style={{ padding: '6px 12px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: 4 }}>
                ثبت
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
const thStyle: React.CSSProperties = {
  padding: '12px 8px',
  borderBottom: '2px solid #ccc',
  textAlign: 'center',
};

const tdStyle: React.CSSProperties = {
  padding: '10px 8px',

};
