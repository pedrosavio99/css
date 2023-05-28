import React, { useState } from 'react';

function TelaColorida() {
  const [cores, setCores] = useState([
    { cor: 'yellow', conteudo: <div className='bg-slate-500'>meu deus</div> },
    { cor: 'blue', conteudo: 'Div Azul' },
    { cor: 'red', conteudo: 'Div Vermelha' },
    { cor: 'green', conteudo: 'Div Verde' },
  ]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('index', index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetIndex) => {
    const startIndex = event.dataTransfer.getData('index');
    const coresAtualizadas = Array.from(cores);

    const [removed] = coresAtualizadas.splice(startIndex, 1);
    coresAtualizadas.splice(targetIndex, 0, removed);

    setCores(coresAtualizadas);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen">
      {cores.map((item, index) => (
        <div
          key={item.cor}
          className={`bg-${item.cor}-500`}
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, index)}
          style={{
            width: '100%',
            height: '100%',
            cursor: 'move',
          }}
        >
          {item.conteudo}
        </div>
      ))}
    </div>
  );
}

export default TelaColorida;
