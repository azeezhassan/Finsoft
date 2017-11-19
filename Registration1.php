

<?

$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$phonenumber=$_POST['phonenumber'];
$email=$_POST['email'];
//$website=$_POST['url'];
$comment=$_POST['comment'];

    
    $body .= "First Name: " . $firstname . "\n"; 
    $body .= "Last Name: " . $lastname . "\n";
    $body .= "Phone Number: " . $phonenumber . "\n";
    $body .= "Email: " . $email . "\n"; 
//    $body .= "Website: " . $website . "\n"; 
    $body .= "Comment:  " . $comment . "\n"; 
	 

	 if(!empty($_POST['course'])){
// Loop to store and display values of individual checked checkbox.
		foreach($_POST['course'] as $selected){
		$body .= "Course:  " . $selected . "\n";
		}
	}


    //replace with your email
    mail("info@finsoftassociates.com","New email",$body); 

  
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script>alert("Your message has been sent successfully. We will contact you shortly.");</script>
<meta HTTP-EQUIV="REFRESH" content="0; url=index.html"> 

</head>