# book-library
<!DOCTYPE html>
<html>
<head>
	<title>Book Library</title>
	 <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="styleodinlib.css ">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	
</head>
<body class="bg-light">

	<header>
		<h1 class="text-center">Book Library</h1>
		<h5 class="text-center text-primary">Store and manage your books</h5>
	</header>

<div class="row justify-content-center">
  <form id="addform" style="width: 30%">

	<div class="form-group">
		<label for="title" class="form-label">Title</label>
		<input class="form-control form-control-sm border border-secondary"  required type="text" id="title1" placeholder="Title">	
	</div>
	<div class="form-group">
		<label for="author" class="form-label">Author</label>
		<input class="form-control form-control-sm border border-secondary"  required type="text" id="author1" placeholder="Author">
	</div>
	<div class="form-group">
		<label for="pages" class="form-label">Number of Pages</label>
		<input class="form-control form-control-sm border border-secondary"  required type="number" id="pages1" placeholder="Number of Pages">
	</div>
	<div class="form-group">
		<label for="isbn" class="form-label">ISBN</label>
		<input class="form-control form-control-sm border border-secondary "  type="text" id="isbn1" placeholder="ISBN" >  
	</div>
	<div class="d-grid gap-2 pt-2 pb-5" id="submitbtn">
		<input type="submit" id="subbtn"  class="btn btn-primary" value="Add Book">
	</div>	
	
 </form>

</div>


<div class="pt-5">
	<table class="table table-striped m-auto" style="width: 70%">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Pages</th>
      <th scope="col">ISBN</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody id="bookList">
  </tbody>
</table>

</div>




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
</script>
<script type="text/javascript" src="scriptodinlib.js"></script>
</body>
</html>
