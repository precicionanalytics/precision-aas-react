function Health() {
  const healthData = {
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "Precision Analytics & Strategy"
  };

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      padding: '20px',
      whiteSpace: 'pre-wrap'
    }}>
      {JSON.stringify(healthData, null, 2)}
    </div>
  );
}

export default Health;
