<?php
	// Data validation
	$response = array();
	$fields = array('name', 'email', 'story');
	foreach ($fields as $field) 
	{
		if (!isset($_POST[$field]) || strlen($_POST[$field]) < 1)
		{
			$response[$field] = 'The '.$field.' field is required.';
		}
		else if ($field == "email" && !filter_var($_POST[$field], FILTER_VALIDATE_EMAIL))
		{
			$response[$field] = 'A valid email address is required.';
		}
	}

	if (!sizeof($response)) 
	{
		// No errors in the data, send email
		if (!mail("derek@dmcbdesign.com", "Request for photography", $_POST['story'], "From: ".$_POST['name']." <".$_POST['email'].">")) 
		{
			echo json_encode(array("error" => "Email failed to send. Please contact Derek directly at <a href=\"mailto:derek@dmcbdesign.com\">derek@dmcbdesign.com</a>."));
		}
	}
	else
	{
		// Report errors
		echo json_encode($response);
	}
?>