<!DOCTYPE html>
<html>
<head>
    <title>JSON Example</title>
</head>
<body>
  <script type="text/javascript">
    let companies =
    `[
       {
          "name": "Big corporate",
          "numberOfEmployees": 1000,
          "ceo": "Neil",
          "rating": 3.6
        },
        {
          "name": "Small startup",
          "numberOfEmployees": 10,
          "ceo": null,
          "rating": 4.3
       }
    ]`
    console.log(JSON.parse(companies))
    </script>
</body>
</html>

console.log(JSON.parse(
    companies[0].name
))