// snapchat Profile Pic hereconst
const profileHeader = document.getElementById("profileHeader");
const dots = document.getElementById("dots");
const menu = document.getElementById("Menu");

dots.addEventListener("click", () => {
  if (menu.classList == "show") {
    menu.classList.toggle("show");
  } else {
    setTimeout(() => {
      menu.classList.toggle("show");
    }, 1000);
  }
});

// Edit Profile :
document.addEventListener("DOMContentLoaded", () => {
  const EditProfile = document.getElementById("editProfile");
  const EditProfilePanel = EditProfile.querySelector("div");
  const closingTab = document.getElementById("tab");
  //   const inputs = EditProfilePanel.querySelectorAll("input");
  const inputName = document.getElementById("Name").value;
  const form = EditProfilePanel.querySelector("form");

  EditProfile.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target === closingTab || EditProfilePanel.contains(event.target))
      return;

    if (EditProfilePanel.classList.contains("showEditPanel")) {
      EditProfilePanel.classList.remove("showEditPanel");
    } else {
      EditProfilePanel.classList.add("showEditPanel");
    }
  });

  closingTab.addEventListener("click", (event) => {
    event.stopPropagation();
    EditProfilePanel.classList.remove("showEditPanel");
  });

  //   inputs.forEach((input) => {
  //     const name = inputs.value;

  //     input.addEventListener("click", (event) => {
  //       event.stopPropagation();
  //     });
  //     input.addEventListener("change", (event) => {
  //       console.log(`Input changed: ${event.target.value}`);
  //     });
  //   });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    var name = document.getElementById("Name").value;
    var Bio = document.getElementById("formBio").value;
    var location = document.getElementById("Location").value;
    // now all i have just  to get the profile name ,bio and location and append them to inner html
    const profileHero = document.getElementById("profileHero");
    const profileName = profileHero.querySelector("h3");
    const profileBio = document.getElementById("bio");
    const profileLocation = profileHero.querySelector("#Loc");
    // ASSING THEM HERE NOW
    console.log(profileBio.textContent);
    profileName.textContent = name;
    profileBio.textContent = Bio;
    profileLocation.textContent = location;
    // name = profileName;
    // bio = profileBio;
    // location = profileLocation;

    // console.log(`Name: ${name}`);
    // console.log(`Bio: ${Bio}`);
    // console.log(`Location: ${location}`);

    // You can now handle the form data as needed
  });
});

// switiching Profile
const switchProfile = document.getElementById("switchProfile");
const hosting = switchProfile.firstElementChild;
const attending = switchProfile.lastElementChild;

// The func here
attending.addEventListener("click", () => {
  console.log("here the doc", document.getElementById("profilePic"));
  const pictures = document.getElementById("profilePic");
  pictures.style.display = "flex";
  pictures.style.flexDirection = "row-reverse";
  pictures.style.transition =
    "flex-direction  ease-in-out, opacity 0.9s linear";

  if (attending.innerHTML == "Attending") {
    attending.style.cssText =
      "background-color:white; color: #878ede; font-weight: bold; background-color: white;padding-inline: 1rem;padding-block: 0.5rem;border-radius: 17px;";

    hosting.style.cssText =
      "font-weight: bold;color: white;padding-inline: 0.9rem;padding-block: 0.5rem;border-radius: 17px;background-color:transparent ;";
  } else {
    hosting.style.cssText =
      "background-color:white; color: #878ede; font-weight: bold; background-color: white;padding-inline: 1rem;padding-block: 0.5rem;border-radius: 17px;";

    attending.style.cssText =
      "font-weight: bold;color: white;padding-inline: 0.9rem;padding-block: 0.5rem;border-radius: 17px;background-color:transparent ;";
  }
});

hosting.addEventListener("click", () => {
  const pictures = document.getElementById("profilePic");
  pictures.style.display = "flex";
  pictures.style.flexDirection = "row";
  pictures.style.transition =
    "flex-direction  ease-in-out, opacity 0.9s linear";

  if (hosting.innerHTML == "Hosting") {
    hosting.style.cssText =
      "background-color:white; color: #878ede; font-weight: bold; background-color: white;padding-inline: 1rem;padding-block: 0.5rem;border-radius: 17px;";

    attending.style.cssText =
      "font-weight: bold;color: white;padding-inline: 0.9rem;padding-block: 0.5rem;border-radius: 17px;background-color:transparent ;";
  }
});
// checking the button side of it
