// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a sphere geometry and material
const geometry = new THREE.SphereGeometry(10, 12, 12);  // Radius, Width Segments, Height Segments
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff, roughness: 0.1, metalness: 1 });  // Utilisation d'un matériau qui réagit à la lumière
const sphere = new THREE.Mesh(geometry, material);

// Add the hemisphere light
// La première couleur est la couleur de la lumière venant du ciel (par exemple, bleu clair),
// La deuxième couleur est celle venant du sol (par exemple, gris foncé ou marron).
const hemiLight = new THREE.HemisphereLight(0xFFFF, 0x893, 8); // Bleu ciel et gris foncé
scene.add(sphere);
scene.add(hemiLight);

const wireMaterial = new THREE.MeshBasicMaterial({ color: 0x9999, wireframe: true, linewidth: 10 });
const wireSphere = new THREE.Mesh(geometry, wireMaterial);
scene.add(wireSphere);

// Position the camera
camera.position.z = 15;

// Animate the sphere (simple rotation)
function animate() {
    requestAnimationFrame(animate);

    // Rotate the sphere
    sphere.rotation.x += 0.001;
    sphere.rotation.y += 0.001;
    wireSphere.rotation.x += 0.001;
    wireSphere.rotation.y += 0.001;

    renderer.render(scene, camera);
}

// Call the animate function to start the animation loop
animate();
