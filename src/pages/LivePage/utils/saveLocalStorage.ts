export const saveLocalStorage = (cardId: number, newMode: boolean, callback: (newIds: number[]) => void) => {
    const savedCardIds = JSON.parse(localStorage.getItem("savedCards") || "[]");
    let newIds = [...savedCardIds];
    if (newMode && !newIds.includes(cardId)) {
      newIds.push(cardId);
    } else if (!newMode && newIds.includes(cardId)) {
      newIds = newIds.filter((id) => id !== cardId);
    }
    localStorage.setItem("savedCards", JSON.stringify(newIds));
    callback(newIds);
  };