// $(function(){
//     $("tr:odd").addClass("striped")
// })

$(function(){
    $("table").addClass("table-dark")
})
$(function(){
    $("table").addClass("table-striped")
})


const obj=[
    {
      month: "january",
      sales: "85",
      amount:"13,555.00",
    },
    {
      month: "February",
      sales: "73",
      amount:"95,000.00",
    },
    {
      month: "March",
      sales: "135",
      amount:"18,000.00",
    },
    {
      month: "April",
      sales: "145",
      amount:"27,500.00",
    },
    {
      month: "May",
      sales: "69",
      amount:"13,000.00",
    },
    {
      month: "Jun",
      sales: "105",
      amount:"20,500.00",
    },

]

// creat table
// const table=$("<table>")
// $(".wrapper").append(table);
function creatTable(){
const table=$(".table");
const tHead=$("<thead>");
table.append(tHead);

const headRow=$("<tr></tr>")
headRow.append(($(`<th>`)).text("Month"));
headRow.append(($(`<th>`)).text("Sales"));
headRow.append(($(`<th>`)).text("Amount"));
tHead.append(headRow);

const tbody=$("<tbody>");
table.append(tbody);

    $.each(obj,function(index,sale){
        const row=$("<tr>");
        row.append(($("<td>")).text(sale.month));
        row.append(($("<td>")).text(sale.sales));
        row.append(($("<td>")).text(sale.amount));
        tbody.append(row);
    })
    table.DataTable();
  }
creatTable()

const input=document.querySelector("input");
input.style.cssText=`background:#2C3034;color:white`;
