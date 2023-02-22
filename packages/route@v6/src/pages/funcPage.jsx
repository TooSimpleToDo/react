import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FuncPage() {
  const navigate = useNavigate();

  return (
    <div className="FuncPage">
      FuncPage
      <p
        onClick={() => {
          navigate('/ClassPage');
        }}
      >
        函数式组件中通过useNavigate跳转
      </p>
    </div>
  );
}

export default FuncPage;
