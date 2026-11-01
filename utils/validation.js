
const ALLOWED_TRACKS = [
  "Web Development",
  "Artificial Intelligence",
  "Cybersecurity",
  "Healthcare",
  "FinTech"
];

function validateRegistration(data) {
  const errors = {};

  const teamName = (data.teamName || "").trim();
  const leaderName = (data.leaderName || "").trim();
  const email = (data.email || "").trim();
  const mobile = (data.mobile || "").trim();
  const teamSize = Number(data.teamSize);
  const track = (data.track || "").trim();
  const projectIdea = (data.projectIdea || "").trim();

  if (teamName.length < 3 || teamName.length > 40) {
    errors.teamName = "Team name must contain 3–40 characters.";
  } else if (!/^[A-Za-z0-9 ]+$/.test(teamName)) {
    errors.teamName = "Use only letters, numbers and spaces.";
  }

  if (!/^[A-Za-z ]{2,50}$/.test(leaderName)) {
    errors.leaderName = "Enter a valid name (2–50 letters and spaces).";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!Number.isInteger(teamSize) || teamSize < 1 || teamSize > 4) {
    errors.teamSize = "Team size must be between 1 and 4 members.";
  }

  if (!ALLOWED_TRACKS.includes(track)) {
    errors.track = "Please select a valid hackathon track.";
  }

  if (projectIdea.length < 20 || projectIdea.length > 500) {
    errors.projectIdea = "Project idea must contain 20–500 characters.";
  }

  return errors;
}

module.exports = { validateRegistration };
