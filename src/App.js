import './App.css';
import ScrollableContent from './ScrollableContent';

function App() {
  return (
    <div className="App" style={{
      fontFamily: 'Roboto, Arial, sans-serif',
      /* Use a modern SVG pattern background */
      backgroundColor: '#232526',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" fill="%23232526"/><circle cx="20" cy="20" r="2" fill="%23414445"/><circle cx="0" cy="40" r="2" fill="%23414445"/><circle cx="40" cy="0" r="2" fill="%23414445"/></svg>')`,
      minHeight: '100vh',
      padding: '32px',
      color: '#fff',
      boxSizing: 'border-box'
    }}>
      {/* Highlighted class name for App */}
      <div style={{
        position: 'absolute',
        top: 8,
        left: 16,
        background: 'rgba(33,33,33,0.85)',
        color: '#fff',
        fontSize: '0.85rem',
        fontWeight: 700,
        padding: '2px 10px',
        borderRadius: '8px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
        zIndex: 10
      }}>
        .App
      </div>
      <div style={{
        position: 'relative',
        background: '#212121',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        padding: '32px',
        maxWidth: '700px',
        margin: '0 auto',
        border: '1px solid #333'
      }}>
        {/* Highlighted class name for inner card */}
        <div style={{
          position: 'absolute',
          top: 8,
          left: 16,
          background: 'rgba(33,33,33,0.85)',
          color: '#fff',
          fontSize: '0.85rem',
          fontWeight: 700,
          padding: '2px 10px',
          borderRadius: '8px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
          zIndex: 10
        }}>
          .card
        </div>
        <h1 style={{ fontWeight: 700, fontSize: '2.5rem', marginBottom: 8 }}>Scrollable Content Demo</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>This is a demo application to showcase a custom scrollable content area with a styled overlay scrollbar.</p>
        <p style={{ color: '#bdbdbd', marginBottom: 32 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.</p>
        <h2 style={{ fontWeight: 600, fontSize: '1.5rem', marginBottom: 12 }}>Color Block Gallery</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px', position: 'relative' }}>
          {/* Highlighted class name for color block gallery */}
          <div style={{
            position: 'absolute',
            top: 8,
            left: 16,
            background: 'rgba(33,33,33,0.85)',
            color: '#fff',
            fontSize: '0.85rem',
            fontWeight: 700,
            padding: '2px 10px',
            borderRadius: '8px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
            zIndex: 10
          }}>
            .color-block-gallery
          </div>
          {[...Array(24)].map((_, i) => {
            // Generate a random color for each block
            const color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 55%)`;
            return (
              <div
                key={i}
                style={{
                  width: '120px',
                  height: '80px',
                  borderRadius: '10px',
                  border: '2px solid #424242',
                  background: color,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  letterSpacing: 1
                }}
              >
                {color}
              </div>
            );
          })}
        </div>
        {/* Highlighted class name for ScrollableContent */}
        <div style={{
          position: 'absolute',
          left: 16,
          marginTop: '-18px',
          background: 'rgba(33,33,33,0.85)',
          color: '#fff',
          fontSize: '0.85rem',
          fontWeight: 700,
          padding: '2px 10px',
          borderRadius: '8px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
          zIndex: 10
        }}>
          .ScrollableContent
        </div>
        <ScrollableContent>
          {[...Array(30)].map((_, i) => (
            <p key={i} style={{
              margin: '0 0 12px 0',
              padding: '12px 16px',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
              borderRadius: '8px',
              fontSize: '1rem',
              color: '#fff',
              boxShadow: i % 5 === 0 ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              border: '1px solid #333'
            }}>
              This is line {i + 1} of scrollable content.
            </p>
          ))}
        </ScrollableContent>
        <p style={{ color: '#bdbdbd', marginTop: 32 }}>End of demo content. You can add more sections or components as needed.</p>
      </div>
    </div>
  );
}

export default App;
