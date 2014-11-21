Triangle-Number
===============
<html>
<head />
<body> 

<script type="text/javascript">
document.write("<h1>Triangle Number</h1>");

for (var numStars = 1; numStars <= size; numStars += 2){
   var numSpaces = (size - numStars) / 2;
   var spaces = '';
        for (var i = 0; i < numSpaces; i++) {
           spaces += ' ';
        }
        var stars = '';
        for (var i = 0; i < numStars; i++) {
          stars += '*';
        }
        console.log(spaces + stars);
}
document.write("</Triangle");

</script>

</body>
</html>
