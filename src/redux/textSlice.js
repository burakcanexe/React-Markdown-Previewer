import { createSlice } from "@reduxjs/toolkit";

function duzenle(text) {
      const sonuc = text.split("\n");
      const newArray = [];
      sonuc.map((item, index) => {
            let filtre = 0;
            let partialize = item.split(" ",);
            partialize.map((p_item, p_index, Con_arr) => {
                  if (p_item.endsWith(",")) {
                        p_item = p_item.slice(0, -1)
                  }
                  if (p_item.startsWith("*") && p_item.endsWith("*") && p_item.length > 3) {
                        filtre++;
                        if (p_item[1] === "*" && p_item[p_item.length - 1] === "*") {
                              let qİtem = "<b>" + p_item.slice(2, -2) + "</b>";
                              partialize[p_index] = qİtem;
                        } else {
                              let qİtem = "<i>" + p_item.slice(1, -1) + "</i>";
                              partialize[p_index] = qİtem;
                        }
                        //console.log(p_item)
                        console.log(Con_arr.toString().replace(/,/gi, " "))
                        if (Con_arr.length === (p_index + 1)) {

                              newArray.push("<p>" + Con_arr.toString().replace(/,/gi, " ") + "</p>")
                        }
                  }
                  else if (p_item.startsWith("\`") && p_item.endsWith("\`") && p_item.length > 3) {
                        newArray.push("<code>" + p_item.slice(1, -1) + "</code>")
                        filtre++;
                  }
                  else if (p_item.startsWith("~~") && p_item.endsWith("~~") && p_item.length > 3) {
                        newArray.push("<del>" + p_item.slice(2, -2) + "</del>");
                        filtre++;
                  }
            })
            if (item.startsWith("###")) {
                  newArray.push("<h3>" + item.slice(3,) + "</h3>");
                  filtre++;
            }
            if (item.startsWith("*")) {
                  if (!sonuc[index - 1].startsWith("*")) {
                        newArray.push("<ul><li>" + item.slice(1,) + "</li>");
                  }
                  if (sonuc[index - 1].startsWith("*") && sonuc[index + 1].startsWith("*")) {
                        newArray.push("<li>" + item.slice(1,) + "</li>");
                  }
                  if (!sonuc[index + 1].startsWith("*")) {
                        newArray.push("<li>" + item.slice(1,) + "</li></ul>");
                  }
                  filtre++;
            }

            let trimlenmis = item.trim();
            const numberS = new RegExp("^[0-9]");
            if (numberS.test(trimlenmis)) {

                  if (!numberS.test(sonuc[index - 1].trim())) {
                        newArray.push("<ol><li>" + item.slice(5,) + "</li>");
                  }
                  if (numberS.test(sonuc[index - 1].trim()) && numberS.test(sonuc[index + 1].trim())) {
                        newArray.push("<li>" + item.slice(5,) + "</li>");
                  }
                  if (!numberS.test(sonuc[index + 1].trim())) {
                        newArray.push("<li>" + item.slice(5,) + "</li></ol>");
                  }
                  filtre++;
            }
            if (trimlenmis.startsWith("*[") && trimlenmis.endsWith(")*")) {
                  let link = trimlenmis.split("]");
                  newArray.push(`<a href="${link[1].slice(1, -2)}">${link[0].slice(2,)}</a>`)
                  filtre++;
            }
            const newR = /=/;
            const newR2 = /[A-Z]/gi;
            if (newR.test(sonuc[index + 1]) && !newR2.test(sonuc[index + 1])) {
                  newArray.push("<h1>" + item + "</h1>");
                  filtre++;
            }
            if (item.startsWith("===") || item.startsWith("--")) {
                  filtre++;
            }
            const newR3 = /-/;
            if (newR3.test(sonuc[index + 1]) && !newR2.test(sonuc[index + 1])) {
                  newArray.push("<h2>" + item + "</h2>");
                  filtre++;
            }
            if (filtre === 0 && item !== "") {
                  newArray.push("<p>" + item + "</p>")
            }
      });
      return newArray;
}

export const textSlice = createSlice({
      name: "textG",
      initialState: {
            items: [],
            input: "",
      },
      reducers: {
            setTextState: (state, action) => {
                  state.items = duzenle(action.payload);
                  state.input = action.payload;
            }
      }
});

export const input = (state) => state.textG.input;

export const { setTextState } = textSlice.actions;
export default textSlice.reducer;