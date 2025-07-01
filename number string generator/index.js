 function combine() {
      const stringValue = document.getElementById("stringInput").value;
      const numberValue = document.getElementById("numberInput").value;

      if (stringValue === "" || numberValue === "") {
        document.getElementById("result").innerText = "⚠️ Please fill both fields!";
        return;
      }

      const result = stringValue + numberValue;
      document.getElementById("result").innerText = "🔹 Result: " + result;
    }