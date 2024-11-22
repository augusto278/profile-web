document.getElementById("edit").addEventListener("click", function () {
  document.getElementById("editForm").style.display = "block";
});

document.getElementById("save").addEventListener("click", function () {
  const newAvailability = document.getElementById("editAvailability").value;
  const newAge = document.getElementById("editAge").value;
  const newLocation = document.getElementById("editLocation").value;
  const newExperience = document.getElementById("editExperience").value;
  const newEmail = document.getElementById("editEmail").value;

  document.getElementById("availability").textContent = `Availability: ${newAvailability}`;
  document.getElementById("age").textContent = `Usia: ${newAge} tahun`;
  document.getElementById("location").textContent = `Lokasi: ${newLocation}`;
  document.getElementById("experience").textContent = `Pengalaman: ${newExperience}`;
  document.getElementById("email").textContent = `Email: ${newEmail}`;

  document.getElementById("editForm").style.display = "none";
});
