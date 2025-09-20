export interface MajorCredits {
  credits: number;
}
export interface MinorCredits {
  credits: number;
}

function sumMajorCredits(subjects: MajorCredits[]): number {
  return subjects.reduce((total, subject) => total + subject.credits, 0);
}

function sumMinorCredits(subjects: MinorCredits[]): number {
  return subjects.reduce((total, subject) => total + subject.credits, 0);
}