function getComputerChoice() {

  const choice = Math.floor(Math.random() * 3);
  return (choice === 0)? "rock":(choice === 1)? "paper":"scissors";
}
alert(getComputerChoice());
