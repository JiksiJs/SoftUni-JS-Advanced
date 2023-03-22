class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(name, gender) {
    if (this.participants.hasOwnProperty(name)) {
      return `${name} has already been added to the list`;
    } else {
      this.participants[name] = gender;
      return `A new participant has been added - ${name}`;
    }
  }

  completeness(participant, condtition) {
    if (!this.participants.hasOwnProperty(participant)) {
      throw new Error(`${participant} is not in the current participants list`);
    }

    if (condtition < 30) {
      throw new Error(
        `${participant} is not well prepared and cannot finish any discipline`
      );
    }

    let disciplines = Math.floor(condtition / 30);

    if (disciplines > 0 && disciplines < 3) {
      return `${participant} could only complete ${disciplines} of the disciplines`;
    } else if (disciplines === 3) {
      let participantGender = this.participants[participant];
      this.listOfFinalists.push({
        name: participant,
        gender: participantGender,
      });
      return `Congratulations, ${participant} finished the whole competition`;
    }
  }

  rewarding(participant) {
    if (this.listOfFinalists.includes(participant)) {
      return `${participant} was rewarded with a trophy for his performance`;
    } else {
      return `${participant} is not in the current finalists list`;
    }
  }

  showRecord(criteria) {
    if (this.listOfFinalists.length === 0) {
      return `There are no finalists in this competition`;
    }

    if (criteria === "male" || criteria === "female") {
      let finalistGender = this.listOfFinalists.filter(
        (finalist) => finalist.gender === criteria
      );
      if (finalistGender.length === 0) {
        return `There are no ${gender}'s that finished the competition`;
      } else {
        return `${finalistGender[0].name} is the first ${criteria} that finished the ${this.name} triathlon`;
      }
    } else if (criteria === "all") {
      let sortedFinalists = this.listOfFinalists.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      let result = [`List of all ${this.name} finalists:`];
      sortedFinalists.forEach((finalist) => {
        result.push(`${finalist.name}`);
      });

      return result.join("\n");
    }
  }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));
