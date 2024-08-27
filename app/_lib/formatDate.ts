export function formatDate(date: Date | string | undefined): string {
  if (date == undefined) {
    return "";
  }
  const parserDate = new Date(date);

  const month = Number(parserDate.getMonth()) + 1;
  const day = parserDate.getDate();
  return `${formatMonth(month.toString())}, ${day}`;
}

export function formatDateWithYear(date: Date | undefined): string {
  if (date == undefined) {
    return "";
  }

  const parserDate = new Date(date);

  const month = Number(parserDate.getMonth()) + 1;
  const day = parserDate.getDate();
  const year = parserDate.getFullYear();
  return `${formatMonth(month.toString())}, ${day}, ${year}`;
}

const formatMonth = (month: string): string => {
  switch (month) {
    case "1":
      return "Jan";
    case "2":
      return "Fev";
    case "3":
      return "Mar";
    case "4":
      return "Abr";
    case "5":
      return "Mai";
    case "6":
      return "Jun";
    case "7":
      return "Jul";
    case "8":
      return "Ago";
    case "9":
      return "Set";
    case "10":
      return "Out";
    case "11":
      return "Nov";
    case "12":
      return "Dez";
    default:
      return "--";
  }
};